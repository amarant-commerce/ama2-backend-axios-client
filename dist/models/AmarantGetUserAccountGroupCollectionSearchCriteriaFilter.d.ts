export type AmarantGetUserAccountGroupCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * name: like
         * access_scopes: jina, jnina
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * name: string
         * access_scopes: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, name, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
