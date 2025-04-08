export type AmarantGetOrderShipmentCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * id: eq, in, range
         * order_id: eq
         * batch_id: eq
         * status: eq
         * carrier_status: like
         * carrier_status_code: like
         * tracking_numbers: ina, nina
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * id: integer
         * order_id: integer, string
         * batch_id: integer, string
         * status: string
         * carrier_status: string
         * carrier_status_code: string
         * tracking_numbers: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, order_id, batch_id, status, carrier_status, carrier_status_code, weight, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
