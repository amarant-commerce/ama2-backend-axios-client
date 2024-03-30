"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ProductsService {
    /**
     * Get product collection.
     * Get product collection.
     * @param q Accepted as a JSON encoded string.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getProductCollection(q, page, itemsPerPage) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/api/products/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
}
exports.ProductsService = ProductsService;
