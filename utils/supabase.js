import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://yszcsjwljqnjnopwcxlx.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzemNzandsanFuam5vcHdjeGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3Njk0MDQsImV4cCI6MjA1NzM0NTQwNH0.HdwthbE8qt7U3KAvF5Kuyimfsaguh7BtmPXH1C7RHsE';
export const supabase = createClient(supabaseUrl, supabaseKey);
