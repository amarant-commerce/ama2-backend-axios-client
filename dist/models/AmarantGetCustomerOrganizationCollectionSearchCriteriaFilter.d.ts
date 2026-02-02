export type AmarantGetCustomerOrganizationCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * name: eq, like
         * state: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * name: string
         * state: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, name, state, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
