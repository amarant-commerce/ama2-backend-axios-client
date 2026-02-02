export type AmarantGetJournalEntryCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * journal_id: eq
         * area: eq
         * identity_type: like
         * identity_id: like
         * level: eq
         * identifiers: ina
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * journal_id: integer, string
         * area: string
         * identity_type: string
         * identity_id: string
         * level: integer, string
         * identifiers: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * area, identity_type, identity_id, level, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
