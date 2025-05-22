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
     * @returns any OK
     * @throws ApiError
     */
    static getMediaEntryCollection(q?: AmarantGetMediaEntryCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantMediaModel>;
    })>;
    /**
     * Upload files to media gallery.
     * Upload files to media gallery.
     * @param formData
     * @returns any Resource created.
     * @throws ApiError
     */
    static uploadMediaGalleryCollection(formData: UploadMediaGalleryCollectionInputAmarantMediaGalleryBackendInput): CancelablePromise<(AmarantApiCollectionResponse & {
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
