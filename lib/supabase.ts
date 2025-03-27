// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill/auto';
import { Database } from './database.types';

// Get these from your Supabase project settings -> API
const supabaseUrl = 'https://yszcsjwljqnjnopwcxlx.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzemNzandsanFuam5vcHdjeGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3Njk0MDQsImV4cCI6MjA1NzM0NTQwNH0.HdwthbE8qt7U3KAvF5Kuyimfsaguh7BtmPXH1C7RHsE';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
