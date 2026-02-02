export type AmarantGetTierRuleCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * name: like
         * price_type: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * name: string
         * price_type: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, name, price_type, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
