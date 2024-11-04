/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetOrderCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * human_id: eq, like
         * channel_id: eq
         * channel_scope_id: eq
         * shipping_addresses: like
         * billing_addresses: like
         * currency: eq, like
         * status: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * human_id: string
         * channel_id: string, integer
         * channel_scope_id: string, integer
         * shipping_addresses: string
         * billing_addresses: string
         * currency: string
         * status: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, human_id, channel_id, channel_scope_id, shipping_addresses, billing_addresses, currency, base_grand_total, grand_total, status, physical, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

