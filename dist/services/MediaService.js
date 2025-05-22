import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MediaService {
    /**
     * Get media entry collection.
     * Get media entry collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getMediaEntryCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/media/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Upload files to media gallery.
     * Upload files to media gallery.
     * @param formData
     * @returns any Resource created.
     * @throws ApiError
     */
    static uploadMediaGalleryCollection(formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/media/v1/gallery',
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
