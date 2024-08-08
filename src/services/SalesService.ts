/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantSalesPricingRule } from '../models/AmarantSalesPricingRule';
import type { AmarantSalesTaxRateModel } from '../models/AmarantSalesTaxRateModel';
import type { AmarantSalesTierRule } from '../models/AmarantSalesTierRule';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SalesService {
    /**
     * Get tier rule collection.
     * Get tier rule collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getTierRuleCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesTierRule>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/tier-rules',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get tier rule item.
     * Get tier rule item.
     * @param id Tier Rule ID
     * @returns AmarantSalesTierRule OK
     * @throws ApiError
     */
    public static getTierRuleItem(
        id: number,
    ): CancelablePromise<AmarantSalesTierRule> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/tier-rules/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get pricing rule collection.
     * Get pricing rule collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getPricingRuleCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesPricingRule>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/rules',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get pricing rule item.
     * Get pricing rule item.
     * @param id Pricing Rule ID
     * @returns AmarantSalesPricingRule OK
     * @throws ApiError
     */
    public static getPricingRuleItem(
        id: number,
    ): CancelablePromise<AmarantSalesPricingRule> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/pricing/rules/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get tax rate collection.
     * Get tax rate collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getTaxRateCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesTaxRateModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales/v1/tax/rates',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
}
