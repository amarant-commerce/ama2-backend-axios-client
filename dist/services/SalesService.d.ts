import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantSalesPricingRule } from '../models/AmarantSalesPricingRule';
import type { AmarantSalesTierRule } from '../models/AmarantSalesTierRule';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SalesService {
    /**
     * Get tier rule collection.
     * Get tier rule collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getTierRuleCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesTierRule>;
    })>;
    /**
     * Get tier rule item.
     * Get tier rule item.
     * @param id Tier Rule ID
     * @returns AmarantSalesTierRule OK
     * @throws ApiError
     */
    static getTierRuleItem(id: number): CancelablePromise<AmarantSalesTierRule>;
    /**
     * Get pricing rule collection.
     * Get pricing rule collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getPricingRuleCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesPricingRule>;
    })>;
    /**
     * Get pricing rule item.
     * Get pricing rule item.
     * @param id Pricing Rule ID
     * @returns AmarantSalesPricingRule OK
     * @throws ApiError
     */
    static getPricingRuleItem(id: number): CancelablePromise<AmarantSalesPricingRule>;
}
