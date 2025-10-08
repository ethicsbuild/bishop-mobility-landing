import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://koxgorilkquhibrgaqkz.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtveGdvcmlsa3F1aGlicmdhcWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NDcyNzIsImV4cCI6MjA3NTUyMzI3Mn0.FLyrTr9tszbrsn9ebbo1wqHPlc2N8SrP95BrsJlu_YQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)