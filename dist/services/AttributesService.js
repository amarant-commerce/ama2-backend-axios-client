import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttributesService {
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @param q Search criteria query.
     * @returns any OK
     * @throws ApiError
     */
    static getAttributeCollection(q) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1',
            query: {
                'q': q,
            },
        });
    }
}
