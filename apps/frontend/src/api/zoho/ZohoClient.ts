import axios, { type AxiosResponse, type AxiosInstance } from 'axios';
import type { ZohoContact } from './Zoho.types';


// const envVarDefined = (vars: string[]): boolean => {
//     return vars.every((v) => { 
//         if(typeof v === 'string' && v.length > 0) {
//             return true;
//         }
//         return false;
//     });
// };

export class ZohoClient {
    axiosInstance: AxiosInstance;
    constructor() {
        if(import.meta.env.MODE !== 'development' && VITE_API_URL === 'http://localhost:3000') {
            throw new Error('VITE_API_URL is not set in production environment');
        }



        this.axiosInstance = axios.create({
            baseURL: VITE_API_URL,
            headers: {
                'Content-Type': 'application/json',
            }

        });

    }

    async createContact(newContatct: Partial<ZohoContact>) {
        return this.axiosInstance.post('/contacts', newContatct);
    }
      async getProducts() {
        return this.axiosInstance.get('/products').then((response: AxiosResponse) => response.data); // only gets first 200 products
    }
}