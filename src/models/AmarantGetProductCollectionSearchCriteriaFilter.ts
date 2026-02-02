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
         * channel_ids: ina
         * category_ids: ina
         * pricing_rules: in
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * sku: string
         * master_sku: string
         * type: string
         * attribute_set_id: string, integer
         * channel_ids: string, integer
         * category_ids: string, integer
         * pricing_rules: array
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, sku, master_sku, type, attribute_set_id, channel_ids, media_count, source_items_qty, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

