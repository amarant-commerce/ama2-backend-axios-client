/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetUserAccountCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * user_account_group_id: eq
         * username: like
         * email: like
         * status: eq
         * failed_login_count: gt, gte, lt, lte
         * times_locked: gt, gte, lt, lte
         * last_login_ip: like, null
         * last_failed_login_ip: like, null
         * locked_until: gt, gte, lt, lte, range, nrange, null
         * last_login_time: gt, gte, lt, lte, range, nrange, null
         * last_failed_login_time: gt, gte, lt, lte, range, nrange, null
         * access_scopes: jina, jnina
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * user_account_group_id: integer, string
         * username: string
         * email: string
         * status: integer, string
         * failed_login_count: integer
         * times_locked: integer
         * last_login_ip: string
         * last_failed_login_ip: string
         * locked_until: string
         * last_login_time: string
         * last_failed_login_time: string
         * access_scopes: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, user_account_group_id, username, email, status, failed_login_count, times_locked, last_login_ip, last_failed_login_ip, locked_until, last_login_time, last_failed_login_time, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

