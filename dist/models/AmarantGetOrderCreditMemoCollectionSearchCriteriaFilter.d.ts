export type AmarantGetOrderCreditMemoCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * order_id: eq
         * invoice_id: eq
         * status: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * order_id: integer, string
         * invoice_id: integer, string
         * status: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, order_id, invoice_id, status, base_grand_total, grand_total, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
