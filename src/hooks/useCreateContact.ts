import { useMutation } from "@tanstack/react-query";
import { useZohoClient } from "./useZohoClient";
import type { ZohoContact } from "../api/zoho/Zoho.types";

export const useCreateContact = () => {
    const zohoClient = useZohoClient();
    return useMutation<ZohoContact, Error, ZohoContact>((newContact: ZohoContact) => zohoClient.createContact(newContact));   
}