export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			contact_requests: {
				Row: {
					company_name: string | null;
					email: string | null;
					first_name: string | null;
					id: string;
					last_name: string | null;
					message_body: string | null;
					phone: string | null;
					updated_at: Date | null;
				};
				Insert: {
					company_name?: string | null;
					email?: string | null;
					first_name?: string | null;
					id?: string;
					last_name?: string | null;
					message_body?: string | null;
					phone?: string | null;
					updated_at?: Date | null;
				};
				Update: {
					company_name?: string | null;
					email?: string | null;
					first_name?: string | null;
					id?: string;
					last_name?: string | null;
					message_body?: string | null;
					phone?: string | null;
					updated_at?: Date | null;
				};
				Relationships: [];
			};
			profiles: {
				Row: {
					avatar_url: string | null;
					full_name: string | null;
					id: string;
					updated_at: string | null;
					company_name: string | null;
					website: string | null;
				};
				Insert: {
					avatar_url?: string | null;
					full_name?: string | null;
					id: string;
					updated_at?: Date | null;
					company_name?: string | null;
					website?: string | null;
				};
				Update: {
					avatar_url?: string | null;
					full_name?: string | null;
					id?: string;
					updated_at?: string | null;
					company_name?: string | null;
					website?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "profiles_id_fkey";
						columns: ["id"];
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
