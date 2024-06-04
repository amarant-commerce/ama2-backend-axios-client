import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * Get order collection.
     * Get order collection.
     * @param q Search criteria query.
     * @returns any OK
     * @throws ApiError
     */
    static getOrderCollection(q) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1',
            query: {
                'q': q,
            },
        });
    }
}
