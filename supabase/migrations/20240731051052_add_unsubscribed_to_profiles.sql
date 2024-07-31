ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS unsubscribed boolean NOT NULL DEFAULT false;
