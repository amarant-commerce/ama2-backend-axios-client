import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MediaService {
    /**
     * Get media entry collection.
     * Get media entry collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getMediaEntryCollection(q, page, itemsPerPage, include, exclude) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/media/v1',
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
     * Upload files to media gallery.
     * Upload files to media gallery.
     * @param formData
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any Resource created.
     * @throws ApiError
     */
    static uploadMediaGalleryCollection(formData, include, exclude) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/media/v1/gallery',
            query: {
                'include': include,
                'exclude': exclude,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Delete files from media gallery.
     * Delete files from media gallery.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static deleteMediaGalleryCollection(requestBody) {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/media/v1/gallery',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
