const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://qhioiqwejkhghzxxbjmr.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoaW9pcXdlamtoZ2h6eHhiam1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NzI3NTcsImV4cCI6MjA1ODE0ODc1N30.VgmDwGkjNmPEBk0bfG31jmDWjOwBSwSkt0QqEaXrhz8'; // Replace with your Supabase Anon Key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;