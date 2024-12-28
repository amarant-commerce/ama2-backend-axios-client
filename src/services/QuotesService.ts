/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCartQuoteModel } from '../models/AmarantCartQuoteModel';
import type { AmarantGetQuoteCollectionSearchCriteriaFilter } from '../models/AmarantGetQuoteCollectionSearchCriteriaFilter';
import type { UpdateQuoteItemInputAmarantSalesQuoteInputDto } from '../models/UpdateQuoteItemInputAmarantSalesQuoteInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuotesService {
    /**
     * Get quote collection.
     * Get quote collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getQuoteCollection(
        q?: AmarantGetQuoteCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCartQuoteModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quotes/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get quote item.
     * Get quote item.
     * @param id Quote ID
     * @returns AmarantCartQuoteModel OK
     * @throws ApiError
     */
    public static getQuoteItem(
        id: number,
    ): CancelablePromise<AmarantCartQuoteModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/quotes/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Update quote item.
     * Update quote item.
     * @param id Quote ID
     * @param requestBody
     * @returns AmarantCartQuoteModel Resource updated.
     * @throws ApiError
     */
    public static updateQuoteItem(
        id: number,
        requestBody: UpdateQuoteItemInputAmarantSalesQuoteInputDto,
    ): CancelablePromise<AmarantCartQuoteModel> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/quotes/v1/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
