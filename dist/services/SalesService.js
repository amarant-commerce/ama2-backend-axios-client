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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getTierRuleCollection(q, page, itemsPerPage, include, exclude) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/tier-rules',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getPricingRuleCollection(q, page, itemsPerPage, include, exclude) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/rules',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getPricingRuleCouponCollection(id, q, page, itemsPerPage, include, exclude) {
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
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Bulk delete pricing rule coupons.
     * Bulk delete pricing rule coupons.
     *
     * Required access scopes:
     * * write_pricing_rules
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static bulkDeletePricingRuleCouponItems(requestBody) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/sales/v1/pricing/coupons',
            body: requestBody,
            mediaType: 'application/json',
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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getTaxRateCollection(q, page, itemsPerPage, include, exclude) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/tax/rates',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getTaxCategoryCollection(q, page, itemsPerPage, include, exclude) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/tax/categories',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get sales analytics order sale history collection.
     * Get sales analytics order sale history collection.
     * @param unit Unit of age of data.
     * @param age Value of age of data.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getSalesAnalyticsOrderSaleHistory(unit, age, include, exclude) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales-analytics/v1/orders/sale-history',
            query: {
                'unit': unit,
                'age': age,
                'include': include,
                'exclude': exclude,
            },
        });
    }
}
