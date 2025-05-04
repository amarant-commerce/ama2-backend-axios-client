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
         * channel_id: integer, string
         * customer_id: integer, string, null
         * organization_id: integer, string, null
         * sku: string
         * amount_type: integer, string
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
