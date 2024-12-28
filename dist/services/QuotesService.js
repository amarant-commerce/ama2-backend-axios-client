import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuotesService {
    /**
     * Get quote collection.
     * Get quote collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getQuoteCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quotes/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get quote item.
     * Get quote item.
     * @param id Quote ID
     * @returns AmarantCartQuoteModel OK
     * @throws ApiError
     */
    static getQuoteItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quotes/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update quote item.
     * Update quote item.
     * @param id Quote ID
     * @param requestBody
     * @returns AmarantCartQuoteModel Resource updated.
     * @throws ApiError
     */
    static updateQuoteItem(id, requestBody) {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/quotes/v1/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
