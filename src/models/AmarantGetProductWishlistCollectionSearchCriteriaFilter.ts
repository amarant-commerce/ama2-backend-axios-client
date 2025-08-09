/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetProductWishlistCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * name: eq
         * shared: tr
         * channel_id: eq
         * customer: like
         * customer_organization_id: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * name: string
         * shared: integer, string, boolean
         * channel_id: string, integer
         * customer: string
         * customer_organization_id: string, integer
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, name, shared, channel_id, customer, customer_organization_id, created_at, updated_at, item_count
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

