export type AmarantGetMediaEntryCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * parent_type: like, eq
         * original_name: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * parent_type: string
         * original_name: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, parent_type, original_name, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
