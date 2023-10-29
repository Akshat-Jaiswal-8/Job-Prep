/* eslint-disable */

import { createClient } from "@supabase/supabase-js";

// eslint-disable-next-line no-undef
export const supabaseUrl = import.meta.env.VITE_REACT_APP_GPT_SUPABASE_URL;
const supabaseanonkey = import.meta.env.VITE_REACT_APP_GPT_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseanonkey);
