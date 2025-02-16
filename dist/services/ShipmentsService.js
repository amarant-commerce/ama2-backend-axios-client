import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ShipmentsService {
    /**
     * Get shipment collection.
     * Get shipment collection.
     *
     * Required access scopes:
     * * read_orders
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getOrderShipmentCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/shipments',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get shipment collection.
     * Get shipment collection.
     *
     * Required access scopes:
     * * read_orders
     * @param id Order ID
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getOrderShipmentCollectionForOrder(id, q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/{id}/shipments',
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
}
