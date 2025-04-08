import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomersService {
    /**
     * Get customer collection.
     * Get customer collection.
     *
     * Required access scopes:
     * * read_customers
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCustomerCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get customer item.
     * Get customer item.
     *
     * Required access scopes:
     * * read_customers
     * @param id Customer ID
     * @returns AmarantSalesCustomerAccountOutputDto OK
     * @throws ApiError
     */
    static getCustomerItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get customer organization collection.
     * Get customer organization collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCustomerOrganizationCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/organizations',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get customer organization item.
     * Get customer organization item.
     * @param id Customer organization ID
     * @returns AmarantSalesCustomerAccountOrganizationOutputDto OK
     * @throws ApiError
     */
    static getCustomerOrganizationItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/organizations/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get customer pricing collection.
     * Get customer pricing collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCustomerPricingCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customer-pricing/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Bulk update customer pricing.
     * Bulk update customer pricing.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static updateCustomerPricingBulk(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customer-pricing/v1/bulk',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Bulk delete customer pricing.
     * Bulk delete customer pricing.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static removeCustomerPricingBulk(requestBody) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/customer-pricing/v1/bulk',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
