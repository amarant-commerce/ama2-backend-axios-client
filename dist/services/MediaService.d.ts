import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetMediaEntryCollectionSearchCriteriaFilter } from '../models/AmarantGetMediaEntryCollectionSearchCriteriaFilter';
import type { AmarantMediaModel } from '../models/AmarantMediaModel';
import type { DeleteMediaGalleryCollectionInputAmarantMediaGalleryBackendDeleteInput } from '../models/DeleteMediaGalleryCollectionInputAmarantMediaGalleryBackendDeleteInput';
import type { UploadMediaGalleryCollectionInputAmarantMediaGalleryBackendInput } from '../models/UploadMediaGalleryCollectionInputAmarantMediaGalleryBackendInput';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MediaService {
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
    static getMediaEntryCollection(q?: AmarantGetMediaEntryCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantMediaModel>;
    })>;
    /**
     * Upload files to media gallery.
     * Upload files to media gallery.
     * @param formData
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any Resource created.
     * @throws ApiError
     */
    static uploadMediaGalleryCollection(formData: UploadMediaGalleryCollectionInputAmarantMediaGalleryBackendInput, include?: string, exclude?: string): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantMediaModel>;
    })>;
    /**
     * Delete files from media gallery.
     * Delete files from media gallery.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static deleteMediaGalleryCollection(requestBody: DeleteMediaGalleryCollectionInputAmarantMediaGalleryBackendDeleteInput): CancelablePromise<void>;
}
