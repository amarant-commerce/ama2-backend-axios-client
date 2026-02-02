/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantGetPricingRuleCouponCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * coupon_code: like
         * usage_limit: range
         * usage_count: range
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr' | 'fa';
        /**
         * coupon_code: string
         * usage_limit: array
         * usage_count: array
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, coupon_code, usage_limit, usage_count, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};

