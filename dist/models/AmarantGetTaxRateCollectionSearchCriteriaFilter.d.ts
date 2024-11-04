export type AmarantGetTaxRateCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * name: like
         * tax_category_code: like
         * country_code: like
         * region_id: like
         * postcode: like
         * zip_range: eq
         * zip_range_from: like
         * zip_range_to: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * name: string
         * tax_category_code: string
         * country_code: string
         * region_id: string
         * postcode: string
         * zip_range: integer, boolean
         * zip_range_from: string
         * zip_range_to: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, name, amount, tax_category_code, country_code, region_id, postcode, zip_range, zip_range_from, zip_range_to, created_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
