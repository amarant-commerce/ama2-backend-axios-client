/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetOrderPaymentTransactionCollectionForOrderSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * parent_id: eq
         * order_id: eq
         * payment_id: eq
         * transaction_id: eq
         * transaction_type: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * parent_id: integer, string
         * order_id: integer, string
         * payment_id: integer, string
         * transaction_id: integer, string
         * transaction_type: integer, string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, parent_id, order_id, payment_id, transaction_id, transaction_type, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

