const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://baszqqjzdsztrzsddebx.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhc3pxcWp6ZHN6dHJ6c2RkZWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMDg5NDMsImV4cCI6MjA1Nzg4NDk0M30.4kKGPoOcaXX-lH67p0j8Wnp6EwlpA_bN5814PN0Pdio'; // Replace with your Supabase Anon Key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;