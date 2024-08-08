import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SalesService {
    /**
     * Get tier rule collection.
     * Get tier rule collection.
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
     * Get tax rate collection.
     * Get tax rate collection.
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
}
