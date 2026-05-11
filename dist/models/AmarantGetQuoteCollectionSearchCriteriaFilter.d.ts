export type AmarantGetQuoteCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * human_id: eq, like
         * channel_id: eq
         * channel_scope_id: eq
         * currency: eq, like
         * state: eq
         * customer: like
         * customer_id: in
         * customer_organization_id: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * human_id: string
         * channel_id: string, integer
         * channel_scope_id: string, integer
         * currency: string
         * state: string, integer
         * customer: string
         * customer_id: array
         * customer_organization_id: string, integer
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, human_id, channel_id, channel_scope_id, currency, base_grand_total, grand_total, state, customer, customer_organization_id, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
