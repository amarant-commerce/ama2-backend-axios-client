export type AmarantGetTaxCategoryCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * code: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * code: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, code
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
