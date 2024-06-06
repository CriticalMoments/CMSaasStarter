-- Create or replace a table for public profiles
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  updated_at timestamp with time zone,
  full_name text,
  company_name text,
  avatar_url text,
  website text
);

-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
ALTER TABLE profiles
  ENABLE ROW LEVEL SECURITY;

-- Create or replace policies
CREATE OR REPLACE POLICY "Profiles are viewable by self." ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE OR REPLACE POLICY "Users can insert their own profile." ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE OR REPLACE POLICY "Users can update own profile." ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Create or replace Stripe Customer Table
CREATE TABLE IF NOT EXISTS stripe_customers (
  user_id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  updated_at timestamp with time zone,
  stripe_customer_id text UNIQUE
);

ALTER TABLE stripe_customers ENABLE ROW LEVEL SECURITY;

-- Create or replace a table for "Contact Us" form submissions
CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  updated_at timestamp with time zone,
  first_name text,
  last_name text,
  email text,
  phone text,
  company_name text,
  message_body text
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop and recreate the trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Set up Storage, if it does not exist
INSERT INTO storage.buckets (id, name)
  VALUES ('avatars', 'avatars')
  ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist, then create or replace policies
DROP POLICY IF EXISTS "Avatar images are publicly accessible." ON storage.objects;
CREATE POLICY "Avatar images are publicly accessible." ON storage.objects
  FOR SELECT USING (bucket_id = 'avatars');

DROP POLICY IF EXISTS "Anyone can upload an avatar." ON storage.objects;
CREATE POLICY "Anyone can upload an avatar." ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'avatars');
