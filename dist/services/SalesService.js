import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SalesService {
    /**
     * Get tier rule collection.
     * Get tier rule collection.
     *
     * Required access scopes:
     * * read_tier_rules
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getTierRuleCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/tier-rules',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get tier rule item.
     * Get tier rule item.
     *
     * Required access scopes:
     * * read_tier_rules
     * @param id Tier Rule ID
     * @returns AmarantSalesTierRule OK
     * @throws ApiError
     */
    static getTierRuleItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/tier-rules/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get pricing rule collection.
     * Get pricing rule collection.
     *
     * Required access scopes:
     * * read_pricing_rules
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getPricingRuleCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/rules',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get pricing rule item.
     * Get pricing rule item.
     *
     * Required access scopes:
     * * read_pricing_rules
     * @param id Pricing Rule ID
     * @returns AmarantSalesPricingRule OK
     * @throws ApiError
     */
    static getPricingRuleItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/rules/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get pricing rule coupon collection.
     * Get pricing rule coupon collection.
     *
     * Required access scopes:
     * * read_pricing_rules
     * @param id Pricing Rule ID
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getPricingRuleCouponCollection(id, q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/rules/{id}/coupons',
            path: {
                'id': id,
            },
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get tax rate collection.
     * Get tax rate collection.
     *
     * Required access scopes:
     * * read_taxes
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getTaxRateCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/tax/rates',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get tax category collection.
     * Get tax category collection.
     *
     * Required access scopes:
     * * read_taxes
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getTaxCategoryCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/tax/categories',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
}
