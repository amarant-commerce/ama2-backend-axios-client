import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetMediaEntryCollectionSearchCriteriaFilter } from '../models/AmarantGetMediaEntryCollectionSearchCriteriaFilter';
import type { AmarantMediaModel } from '../models/AmarantMediaModel';
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
}
