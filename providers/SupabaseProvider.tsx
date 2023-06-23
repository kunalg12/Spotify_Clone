"use client"

import { Database } from "@/types_db"
import { SupabaseClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Children, useState } from "react";

interface SupabaseProviderProps {
    children : React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const[supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
    );

return (
    <SessionContextProvider supabaseClient={SupabaseClient}>
        {children}
    </SessionContextProvider>
)
};

export default SupabaseProvider