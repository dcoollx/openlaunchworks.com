import Stripe from 'stripe';

// Initialize with a dummy or env variable; functions provide the real key
export const getStripeClient = (apiKey: string) => {
  return new Stripe(apiKey, {
    typescript: true,
  });
};