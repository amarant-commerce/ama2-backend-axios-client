/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetProductCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * sku: eq, like
         * master_sku: eq, like
         * type: eq
         * attribute_set_id: eq
         * category_ids: ina
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * sku: string
         * master_sku: string
         * type: string
         * attribute_set_id: string, integer
         * category_ids: string, integer
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, sku, master_sku, type, attribute_set_id, media_count, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

