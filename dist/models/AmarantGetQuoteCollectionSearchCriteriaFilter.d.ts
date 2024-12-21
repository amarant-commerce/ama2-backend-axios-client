export type AmarantGetQuoteCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * channel_id: eq
         * channel_scope_id: eq
         * currency: eq, like
         * status: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * channel_id: string, integer
         * channel_scope_id: string, integer
         * currency: string
         * status: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, channel_id, channel_scope_id, currency, base_grand_total, grand_total, status, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
