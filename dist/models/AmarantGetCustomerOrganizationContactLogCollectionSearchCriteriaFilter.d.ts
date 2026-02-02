export type AmarantGetCustomerOrganizationContactLogCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * organization_id: eq
         * customer_id: eq
         * note: like
         * contact_time: gt, gte, lt, lte
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * organization_id: integer
         * customer_id: integer
         * note: string
         * contact_time: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, organization_id, customer_id, contact_time
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
