import { createClient } from '@supabase/supabase-js'
import { Database } from '../../database.types'

// Create a single supabase client for interacting with your database
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  supabaseKey
)
