/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetUserAccountApiKeyCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * user_account_id: eq
         * name: like
         * active: tr, fa
         * last_used_ip: like, null
         * last_used_time: gt, gte, lt, lte, range, nrange, null
         * access_scopes: jina, jnina
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * user_account_id: integer, string
         * name: string
         * active: boolean, integer, string
         * last_used_ip: string
         * last_used_time: string
         * access_scopes: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, user_account_id, name, active, last_used_ip, last_used_time, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

