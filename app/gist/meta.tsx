"use server";

import { SupabaseClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecretKey = process.env.SUPABASE_SECRET_KEY;

export type DataType = {
  id: string; // ID of the metadata entry
};

export const getData = async () => {
  if (supabaseUrl && supbaseSecretKey) {
    const supabase = new SupabaseClient(supabaseUrl, supbaseSecretKey);
    //const supabaseUser = createClient();
    const metaData = await supabase.auth.getUser();
    return metaData.data.user; //returns<GistType[]>();
  }
};
