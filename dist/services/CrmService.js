import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CrmService {
    /**
     * Get client collection.
     * Get client collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCrmClientCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/crm/v1/clients',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get client item.
     * Get client item.
     * @param id Client ID
     * @returns AmarantCrmClientModel OK
     * @throws ApiError
     */
    static getCrmClientItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/crm/v1/clients/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get client contact log collection.
     * Get client contact log collection.
     * @param id Client ID
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCrmClientContactLogCollection(id, q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/crm/v1/clients/{id}/contact-logs',
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
