import { useMutation } from "@tanstack/react-query";
import { useZohoClient } from "./useZohoClient";
import type { ZohoContact } from "../api/zoho/Zoho.types";
import type { AxiosResponse } from "axios";

export const useCreateContact = () => {
    const zohoClient = useZohoClient();
    return useMutation<Partial<ZohoContact>, Error, Partial<ZohoContact>>({
        mutationFn:    
        async (newContact: Partial<ZohoContact>) => {
            const response = await zohoClient.createContact(newContact);
            return response.data;
        }
    });

}      