export type AmarantGetChannelScopeCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * code: like
         * name: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * code: string
         * name: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, code, name, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
