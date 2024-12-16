import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCrmClientModel } from '../models/AmarantCrmClientModel';
import type { AmarantGetCrmClientCollectionSearchCriteriaFilter } from '../models/AmarantGetCrmClientCollectionSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CrmService {
    /**
     * Get client collection.
     * Get client collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCrmClientCollection(q?: AmarantGetCrmClientCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCrmClientModel>;
    })>;
    /**
     * Get client item.
     * Get client item.
     * @param id Client ID
     * @returns AmarantCrmClientModel OK
     * @throws ApiError
     */
    static getCrmClientItem(id: number): CancelablePromise<AmarantCrmClientModel>;
}
