import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://eaoovqrutckonnubrzyd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhb292cXJ1dGNrb25udWJyenlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0MTg4NjgsImV4cCI6MjA3MDk5NDg2OH0.jUR2i61EOmk5XiqRTMdz3GVp1Ch9ynJSRkLe9EHbp4c'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase