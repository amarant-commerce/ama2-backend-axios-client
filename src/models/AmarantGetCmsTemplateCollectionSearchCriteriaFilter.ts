/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetCmsTemplateCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * type: like
         * template_type: like
         * identifier: like
         * title: like
         * area: like
         * created_by_username: like
         * updated_by_username: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * type: string
         * template_type: string
         * identifier: string
         * title: string
         * area: string
         * created_by_username: string
         * updated_by_username: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, type, template_type, identifier, title, area, created_at, created_by_username, updated_at, updated_by_username
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

