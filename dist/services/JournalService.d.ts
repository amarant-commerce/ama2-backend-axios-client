import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetJournalEntryCollectionSearchCriteriaFilter } from '../models/AmarantGetJournalEntryCollectionSearchCriteriaFilter';
import type { AmarantJournalEntryModel } from '../models/AmarantJournalEntryModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class JournalService {
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
    static getJournalEntryCollection(q?: AmarantGetJournalEntryCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantJournalEntryModel>;
    })>;
}
