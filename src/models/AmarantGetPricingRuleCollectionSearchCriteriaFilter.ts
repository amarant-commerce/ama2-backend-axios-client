/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetPricingRuleCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * active: eq
         * featured: eq
         * name: eq, like
         * subject: eq, like
         * price_type: eq, like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * active: integer, string
         * featured: integer, string
         * name: string
         * subject: string
         * price_type: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, active, featured, name, subject, price_type, priority, valid_from, valid_to
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

