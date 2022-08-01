import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = 'https://msbzwhskryiluknftrmi.supabase.co';
const SUPABASE_KEY =
  // eslint-disable-next-line max-len
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zYnp3aHNrcnlpbHVrbmZ0cm1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkzOTIxMDEsImV4cCI6MTk3NDk2ODEwMX0.SOiDGRXzFHVPSMuGFb2Bg-ONY2D1GpX-19mTZWUb92w';

export const client = createClient(SUPABASE_URL, SUPABASE_KEY);
