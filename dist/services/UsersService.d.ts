import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetUserAccountApiKeyCollectionSearchCriteriaFilter } from '../models/AmarantGetUserAccountApiKeyCollectionSearchCriteriaFilter';
import type { AmarantGetUserAccountCollectionSearchCriteriaFilter } from '../models/AmarantGetUserAccountCollectionSearchCriteriaFilter';
import type { AmarantGetUserAccountGroupCollectionSearchCriteriaFilter } from '../models/AmarantGetUserAccountGroupCollectionSearchCriteriaFilter';
import type { AmarantUserAccountApiKeyModel } from '../models/AmarantUserAccountApiKeyModel';
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
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getUserAccountCollection(q?: AmarantGetUserAccountCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantUserAccountModel>;
    })>;
    /**
     * Get user account group collection.
     * Get user account group collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getUserAccountGroupCollection(q?: AmarantGetUserAccountGroupCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantUserAccountGroupModel>;
    })>;
    /**
     * Get user account API key collection.
     * Get user account API key collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getUserAccountApiKeyCollection(q?: AmarantGetUserAccountApiKeyCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantUserAccountApiKeyModel>;
    })>;
}
