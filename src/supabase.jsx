import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uwkwqeitkfcprghqmqot.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3a3dxZWl0a2ZjcHJnaHFtcW90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1NTkyNTcsImV4cCI6MjAwNDEzNTI1N30.LTsyw5Vyn_-LON8gmYvyLBHuxPJ0ekBhVi-kP7dkbbM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
