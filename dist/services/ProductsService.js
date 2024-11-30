import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Get product collection.
     * Get product collection.
     *
     * Required access scopes:
     * * read_products
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getProductCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get product item.
     * Get product item.
     *
     * Required access scopes:
     * * read_products
     * @param id Product ID
     * @returns AmarantProductBackendOutputProductOutput OK
     * @throws ApiError
     */
    static getProductItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Bulk delete product items.
     * Bulk delete product items.
     *
     * Required access scopes:
     * * write_products
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static bulkDeleteProductItems(requestBody) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/products/v1/bulk',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Sync product data from CSV.
     * Sync product data from CSV.
     *
     * Required access scopes:
     * * write_products
     * * write_categories
     * @param formData
     * @returns void
     * @throws ApiError
     */
    static syncProductCsv(formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/products/v1/sync/csv',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
