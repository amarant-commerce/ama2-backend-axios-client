/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetChannelCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * code: like
         * name: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * code: string
         * name: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, code, name, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

