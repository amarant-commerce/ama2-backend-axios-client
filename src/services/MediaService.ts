/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetMediaEntryCollectionSearchCriteriaFilter } from '../models/AmarantGetMediaEntryCollectionSearchCriteriaFilter';
import type { AmarantMediaModel } from '../models/AmarantMediaModel';
import type { DeleteMediaGalleryCollectionInputAmarantMediaGalleryBackendDeleteInput } from '../models/DeleteMediaGalleryCollectionInputAmarantMediaGalleryBackendDeleteInput';
import type { UploadMediaGalleryCollectionInputAmarantMediaGalleryBackendInput } from '../models/UploadMediaGalleryCollectionInputAmarantMediaGalleryBackendInput';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static getMediaEntryCollection(
        q?: AmarantGetMediaEntryCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantMediaModel>;
    })> {
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
    public static uploadMediaGalleryCollection(
        formData: UploadMediaGalleryCollectionInputAmarantMediaGalleryBackendInput,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantMediaModel>;
    })> {
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
    public static deleteMediaGalleryCollection(
        requestBody: DeleteMediaGalleryCollectionInputAmarantMediaGalleryBackendDeleteInput,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/media/v1/gallery',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
