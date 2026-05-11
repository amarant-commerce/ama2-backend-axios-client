/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCookiePanelModel } from '../models/AmarantCookiePanelModel';
import type { AmarantGetCookiePanelCollectionSearchCriteriaFilter } from '../models/AmarantGetCookiePanelCollectionSearchCriteriaFilter';
import type { AmarantSalesAnalyticsSaleHistoryModel } from '../models/AmarantSalesAnalyticsSaleHistoryModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnalyticsService {
    /**
     * Get cookie panel collection.
     * Get cookie panel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getCookiePanelCollection(
        q?: AmarantGetCookiePanelCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCookiePanelModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cookie-panels/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get cookie panel item.
     * Get cookie panel item.
     * @param id Cookie panel ID
     * @returns AmarantCookiePanelModel OK
     * @throws ApiError
     */
    public static getCookiePanelItem(
        id: number,
    ): CancelablePromise<AmarantCookiePanelModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/cookie-panels/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get sales analytics order sale history collection.
     * Get sales analytics order sale history collection.
     * @param unit Unit of age of data.
     * @param age Value of age of data.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getSalesAnalyticsOrderSaleHistory(
        unit: 'days',
        age: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantSalesAnalyticsSaleHistoryModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales-analytics/v1/orders/sale-history',
            query: {
                'unit': unit,
                'age': age,
                'include': include,
                'exclude': exclude,
            },
        });
    }
}
