import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JournalService {
    /**
     * Get journal entry collection.
     * Get journal entry collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getJournalEntryCollection(q, page, itemsPerPage, include, exclude) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/journal/v1/entries',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
}
