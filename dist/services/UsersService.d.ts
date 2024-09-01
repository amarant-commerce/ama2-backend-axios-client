import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { AmarantUserAccountGroupModel } from '../models/AmarantUserAccountGroupModel';
import type { AmarantUserAccountModel } from '../models/AmarantUserAccountModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class UsersService {
    /**
     * Get user account collection.
     * Get user account collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getUserAccountCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantUserAccountModel>;
    })>;
    /**
     * Get user account group collection.
     * Get user account group collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getUserAccountGroupCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantUserAccountGroupModel>;
    })>;
}