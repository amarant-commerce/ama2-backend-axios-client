export type AmarantGetAttributeCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * entity_id: eq
         * code: eq, like
         * type: eq
         * input_type: eq
         * entity_name: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * entity_id: integer, string
         * code: string
         * type: string
         * input_type: string
         * entity_name: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, entity_id, code, type, input_type, entity_name
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
