/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetCookiePanelCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * active: eq
         * identifier: like
         * channel_scope_ids: aina
         * created_by_username: like
         * updated_by_username: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * active: integer, string
         * identifier: string
         * channel_scope_ids: string, integer
         * created_by_username: string
         * updated_by_username: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, active, identifier, channel_scope_ids, created_at, created_by_username, updated_at, updated_by_username
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

