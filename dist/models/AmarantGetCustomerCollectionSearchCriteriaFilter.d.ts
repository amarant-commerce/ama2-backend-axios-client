export type AmarantGetCustomerCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * channel_id: eq
         * username: eq, like
         * email: eq, like
         * state: eq
         * group_id: eq
         * organization_id: eq
         * created_in_area: eq, like
         * external_provider: eq, like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * channel_id: string, integer
         * username: string
         * email: string
         * state: string
         * group_id: string, integer
         * organization_id: string, integer
         * created_in_area: string
         * external_provider: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, channel_id, username, email, state, group_id, organization_id, last_logged_in_time, last_seen_time, created_at, created_in_area, external_provider
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
