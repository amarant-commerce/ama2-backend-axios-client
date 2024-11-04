/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetChannelDomainCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * channel_id: eq
         * host: like
         * state: eq
         * default_domain: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * channel_id: integer, string
         * host: string
         * state: string
         * default_domain: integer, string, boolean
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, channel_id, host, state, default_domain, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

