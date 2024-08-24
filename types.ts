import Stripe from "stripe";

// Define UserDetails interface with appropriate types
export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name?: string;
    avatar_url?: string;
    billing_address?: string;
    payment_method?: Stripe.PaymentMethod.Type;  // Correct type for payment_method
}
export interface Products {
    id: string;
    name?: string;
    description?: string;
    active?: boolean; // Indicates if the product is active
    image?: string; // URL or string representing the product image
    metadata?: Stripe.Metadata; // Metadata associated with the product
}
export interface Price {
    id: string;
    product_id?:string;
    active?: boolean;
    description?: string;
    unit_amount?: number;
    currency?: string;
    type?: Stripe.Price.Type;
    interval?: Stripe.Price.Recurring.Interval;
    interval_count?: number;
    trial_period_days?: number | null;
    metadata?: Stripe.Metadata;
    products?:Products;
    // Add other relevant fields from Stripe's Price object
}
// Define Subscription interface with example fields
export interface Subscription {
    id: string;
    user_id: string;
    status?: string; // Add status field to indicate the status of the subscription
    metadata?: Stripe.Metadata;
    price_id?:string;
    quantity?: string;
    cancel_at_period_end?:boolean;
    created: string;
    current_period_start: string;
    current_period_end: string;
    ended_at?:string;
    cancel_at?: string;
    canceled_at?: string;
    trial_start?: string;
    trial_end?:string;
    prices?: Price;
}
