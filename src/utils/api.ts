import { supabase } from "../../supabase/supabase.ts";
import { Subject } from "../types/types.ts";

export async function getReqs() {
    const { data, error } = await supabase.from('requirements').select();

        if (error) {
            console.error(error);
            return;
        }

        return data;
}
