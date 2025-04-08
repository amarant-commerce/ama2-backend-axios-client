/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetCustomerPricingCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * channel_id: eq
         * customer_id: eq
         * organization_id: eq
         * sku: like
         * amount_type: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * channel_id: integer
         * customer_id: integer, null
         * organization_id: integer, null
         * sku: string
         * amount_type: integer
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, channel_id, customer_id, organization_id, sku, amount_type, amount, qty, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

