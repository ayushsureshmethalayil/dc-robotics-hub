import { createClient } from '@supabase/supabase-js';

// Replace with your actual URL and Anon Key
const supabaseUrl = "https://jcgshwwerpjxwmrvpusd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZ3Nod3dlcnBqeHdtcnZwdXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMTI4NzYsImV4cCI6MjA2MDU4ODg3Nn0.Zm78rrz7kdwbXHmiZTSaqTMTpmAnpt2aXNR8pBcFl9w";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
