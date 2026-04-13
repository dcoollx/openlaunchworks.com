import { ZohoClient } from "../api/zoho/ZohoClient";
import { useMemo } from "react";


const { ZOHO_GRANT_TYPE, ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET } = import.meta.env;
export const useZohoClient = () => {
    // memoize the ZohoClient instance to avoid creating a new instance on every render
    const zohoClient = useMemo(() => {
        
        const client = new ZohoClient({
            grant_type: ZOHO_GRANT_TYPE,
            client_id: ZOHO_CLIENT_ID,
            client_secret: ZOHO_CLIENT_SECRET
        });
        client.init();
        return client;
    }, [ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_GRANT_TYPE]);
    return zohoClient;
} 