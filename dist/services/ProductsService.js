import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Get product collection.
     * Get product collection.
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
     * @param requestBody
     * @returns any
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
}
