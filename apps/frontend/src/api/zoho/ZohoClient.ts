import axios, { type AxiosResponse, type AxiosInstance } from 'axios';
import type { ZohoContact } from './Zoho.types';

type ZohoTokenResponse = {
    access_token: string,
    refresh_token: string
    api_domain: string,
    token_type: "Bearer",
    expires_in: number;
};
type ZohoAccessTokenResponse = {
    access_token: string,
    api_domain: string,
    token_type: "Bearer",
    expires_in: number;
};

const envVarDefined = (vars: string[]): boolean => {
    return vars.every((v) => { 
        if(typeof v === 'string' && v.length > 0) {
            return true;
        }
        return false;
    });
};

export class ZohoClient {
    axiosInstance: AxiosInstance;
    private clientId: string
    private clientSecret: string;
    protected initialized: boolean = false;
    refreshToken: string;
    accessToken: string;
    private code: string;
    constructor() {
        const { VITE_ZOHO_CODE, VITE_ZOHO_CLIENT_ID, VITE_ZOHO_CLIENT_SECRET } = import.meta.env;
        if(!envVarDefined([VITE_ZOHO_CLIENT_ID, VITE_ZOHO_CLIENT_SECRET, VITE_ZOHO_CODE])) {
            throw new Error('Missing required environment variables for ZohoClient. Please ensure VITE_ZOHO_CLIENT_ID, VITE_ZOHO_CLIENT_SECRET, and VITE_ZOHO_CODE are set.');
        }
        this.clientId = VITE_ZOHO_CLIENT_ID;
        this.clientSecret = VITE_ZOHO_CLIENT_SECRET;
        this.code = VITE_ZOHO_CODE;
        this.accessToken = '';
        this.refreshToken = '';


        this.axiosInstance = axios.create({
            baseURL: 'https://www.zohoapis.com/',
            headers: {
                'Content-Type': 'application/json',
            }

        });

        this.axiosInstance.interceptors.response.use(
            response => response, // Directly return successful responses.
            async error => {
            const originalRequest = error.config;
            if (error?.response?.status === 401 && !originalRequest._retry) {
                if(!this.initialized) {
                    throw new Error('ZohoClient not initialized. Call init() before making API requests.');
                }
            originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
            try {
               
                // Make a request to your auth server to refresh the token.
                const { access_token: accessToken} = await this.getAccessToken()
                // Store the new access and refresh tokens.
                this.accessToken = accessToken;
                // Update the authorization header with the new access token.
                this.axiosInstance.defaults.headers.common['Authorization'] = `Zoho-oauthtoken ${accessToken}`;
                return this.axiosInstance(originalRequest); // Retry the original request with the new access token.
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
            }
            return Promise.reject(error); // For all other errors, return the error as is.
  }
);
    }
    async getRefreshTokens(): Promise<ZohoTokenResponse> {
    const refreshToken = this.refreshToken;
    return this.axiosInstance.post(`https://accounts.zoho.com/oauth/v2/token?client_id=${this.clientId}&client_secret=${this.clientSecret}&grant_type=authorization_code&code=${this.code}`)
    .then(response => response.data);    
    

    }

    async getAccessToken(): Promise<ZohoAccessTokenResponse> {
        return this.axiosInstance.post(`https://accounts.zoho.com/oauth/v2/token?refresh_token=${this.refreshToken}&client_id=${this.clientId}&client_secret=${this.clientSecret}&grant_type=refresh_token`)
        .then(response => response.data);
    }

    async createContact(newContatct: Partial<ZohoContact>) {
        return this.axiosInstance.post('https://www.zohoapis.com/bigin/v2/Contacts', newContatct);
    }
      async getProducts() {
        return this.axiosInstance.get('https://www.zohoapis.com/bigin/v2/Products'); // only gets first 200 products
    }

    async init(){
        const {access_token: accessToken, refresh_token: refreshToken} = await this.getRefreshTokens ();
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.axiosInstance.defaults.headers.common['Authorization'] = `Zoho-oauthtoken ${accessToken}`;
        this.initialized = true;
    }
}