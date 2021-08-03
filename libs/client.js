import { createClient } from 'microcms-js-sdk';
export const client = createClient({
    serviceDomain: 'rura',
    apiKey: process.env.API_KEY,
});
