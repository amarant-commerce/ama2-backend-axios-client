/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetAttributeCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * code: eq, like
         * type: eq
         * input_type: eq
         * entity_name: eq
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * code: string
         * type: string
         * input_type: string
         * entity_name: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, code, type, input_type, entity_name
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

