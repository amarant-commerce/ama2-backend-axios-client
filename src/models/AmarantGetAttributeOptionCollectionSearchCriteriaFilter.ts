/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetAttributeOptionCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * attribute_id: eq
         * label: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * attribute_id: integer, string
         * label: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, attribute_id, label, position
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

