import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TermsAndConditionsService {
    /**
     * Get terms and conditions collection.
     * Get terms and conditions collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getTermsConditionsCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/terms-conditions/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get terms and conditions item.
     * Get terms and conditions item.
     * @param id Terms and conditions ID
     * @returns AmarantSalesTermsConditionsOutputDto OK
     * @throws ApiError
     */
    static getTermsConditionsItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/terms-conditions/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
}
