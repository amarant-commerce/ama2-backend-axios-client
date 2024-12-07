import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JournalService {
    /**
     * Get journal entry collection.
     * Get journal entry collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getJournalEntryCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/journal/v1/entries',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
}
