export type AmarantGetSalesNewsletterSubscriberCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * channel_id: eq
         * subject_type: eq, like
         * email: eq, like
         * status: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * channel_id: string, integer
         * subject_type: string
         * email: string
         * status: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, channel_id, subject_type, email, status, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
