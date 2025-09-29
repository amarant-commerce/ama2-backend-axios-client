import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetPricingRuleCollectionSearchCriteriaFilter } from '../models/AmarantGetPricingRuleCollectionSearchCriteriaFilter';
import type { AmarantGetPricingRuleCouponCollectionSearchCriteriaFilter } from '../models/AmarantGetPricingRuleCouponCollectionSearchCriteriaFilter';
import type { AmarantGetTaxCategoryCollectionSearchCriteriaFilter } from '../models/AmarantGetTaxCategoryCollectionSearchCriteriaFilter';
import type { AmarantGetTaxRateCollectionSearchCriteriaFilter } from '../models/AmarantGetTaxRateCollectionSearchCriteriaFilter';
import type { AmarantSalesPricingRule } from '../models/AmarantSalesPricingRule';
import type { AmarantSalesPricingRuleCoupon } from '../models/AmarantSalesPricingRuleCoupon';
import type { AmarantSalesTaxCategoryModel } from '../models/AmarantSalesTaxCategoryModel';
import type { AmarantSalesTaxRateModel } from '../models/AmarantSalesTaxRateModel';
import type { AmarantSalesTierRule } from '../models/AmarantSalesTierRule';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SalesService {
    /**
     * Get tier rule collection.
     * Get tier rule collection.
     *
     * Required access scopes:
     * * read_tier_rules
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
     *
     * Required access scopes:
     * * read_tier_rules
     * @param id Tier Rule ID
     * @returns AmarantSalesTierRule OK
     * @throws ApiError
     */
    static getTierRuleItem(id: number): CancelablePromise<AmarantSalesTierRule>;
    /**
     * Get pricing rule collection.
     * Get pricing rule collection.
     *
     * Required access scopes:
     * * read_pricing_rules
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getPricingRuleCollection(q?: AmarantGetPricingRuleCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesPricingRule>;
    })>;
    /**
     * Get pricing rule item.
     * Get pricing rule item.
     *
     * Required access scopes:
     * * read_pricing_rules
     * @param id Pricing Rule ID
     * @returns AmarantSalesPricingRule OK
     * @throws ApiError
     */
    static getPricingRuleItem(id: number): CancelablePromise<AmarantSalesPricingRule>;
    /**
     * Get pricing rule coupon collection.
     * Get pricing rule coupon collection.
     *
     * Required access scopes:
     * * read_pricing_rules
     * @param id Pricing Rule ID
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getPricingRuleCouponCollection(id: number, q?: AmarantGetPricingRuleCouponCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesPricingRuleCoupon>;
    })>;
    /**
     * Get tax rate collection.
     * Get tax rate collection.
     *
     * Required access scopes:
     * * read_taxes
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getTaxRateCollection(q?: AmarantGetTaxRateCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesTaxRateModel>;
    })>;
    /**
     * Get tax category collection.
     * Get tax category collection.
     *
     * Required access scopes:
     * * read_taxes
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getTaxCategoryCollection(q?: AmarantGetTaxCategoryCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesTaxCategoryModel>;
    })>;
}
