import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const supabaseUrl = 'https://jcgshwwerpjxwmrvpusd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZ3Nod3dlcnBqeHdtcnZwdXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMTI4NzYsImV4cCI6MjA2MDU4ODg3Nn0.Zm78rrz7kdwbXHmiZTSaqTMTpmAnpt2aXNR8pBcFl9w'; // shortened for clarity
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ContentEditor = () => {
  const [title, setTitle] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('site_content')
        .select('value')
        .eq('key', 'homepage_title')
        .single();

      if (data) {
        setTitle(data.value);
      }
    };

    fetchData();
  }, []);

  const saveContent = async () => {
    setSaving(true);
    await supabase
      .from('site_content')
      .upsert({ key: 'homepage_title', value: title });
    setSaving(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4 font-bold">Edit Homepage Title</h1>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter homepage title"
      />
      <Button onClick={saveContent} className="mt-4" disabled={saving}>
        {saving ? 'Saving...' : 'Save'}
      </Button>
    </div>
  );
};

export default ContentEditor;
