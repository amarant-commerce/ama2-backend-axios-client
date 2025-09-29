export type AmarantGetPricingRuleCouponCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * pricing_rule_id: eq
         * coupon_code: like
         * usage_limit: range
         * usage_count: range
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * pricing_rule_id: integer, string
         * coupon_code: string
         * usage_limit: integer, string
         * usage_count: integer, string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, pricing_rule_id, coupon_code, usage_limit, usage_count, created_at, updated_at
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
