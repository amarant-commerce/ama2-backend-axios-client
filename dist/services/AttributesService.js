import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttributesService {
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getAttributeCollection(q, page, itemsPerPage, include, exclude) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get attribute option collection.
     * Get attribute option collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getAttributeOptionCollection(q, page, itemsPerPage, include, exclude) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1/options',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Update attribute option item.
     * Update attribute option item.
     * @param id Attribute option ID.
     * @param formData
     * @returns AmarantAttributeOptionModel OK
     * @throws ApiError
     */
    static updateAttributeOptionItem(id, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/attributes/v1/options/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
