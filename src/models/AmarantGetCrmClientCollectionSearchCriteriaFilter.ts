/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetCrmClientCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * active: eq
         * customer_id: eq
         * customer_organization_id: eq
         * created_by_username: like
         * updated_by_username: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * active: integer, string
         * customer_id: integer
         * customer_organization_id: integer
         * created_by_username: string
         * updated_by_username: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, active, customer_id, customer_organization_id, created_at, created_by_username, updated_at, updated_by_username
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

