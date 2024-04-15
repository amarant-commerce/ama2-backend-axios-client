import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { AmarantTierRule } from '../models/AmarantTierRule';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SalesService {
    /**
     * Get tier rule collection.
     * Get tier rule collection.
     * @param q Search criteria query.
     * @param page PageModel.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getTierRuleCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantTierRule>;
    })>;
    /**
     * Get tier rule item.
     * Get tier rule item.
     * @param id Tier Rule ID
     * @returns AmarantTierRule OK
     * @throws ApiError
     */
    static getTierRuleItem(id: number): CancelablePromise<AmarantTierRule>;
}
