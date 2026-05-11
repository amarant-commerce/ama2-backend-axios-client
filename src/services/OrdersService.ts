/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetOrderCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderCollectionSearchCriteriaFilter';
import type { AmarantGetOrderPaymentTransactionCollectionForOrderSearchCriteriaFilter } from '../models/AmarantGetOrderPaymentTransactionCollectionForOrderSearchCriteriaFilter';
import type { AmarantGetOrderPaymentTransactionCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderPaymentTransactionCollectionSearchCriteriaFilter';
import type { AmarantOrderModel } from '../models/AmarantOrderModel';
import type { AmarantOrderPaymentTransactionModel } from '../models/AmarantOrderPaymentTransactionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * Get order collection.
     * Get order collection.
     *
     * Required access scopes:
     * * read_orders
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderCollection(
        q?: AmarantGetOrderCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1',
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
     * Get order payment transaction collection.
     * Get order payment transaction collection.
     *
     * Required access scopes:
     * * read_orders
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderPaymentTransactionCollection(
        q?: AmarantGetOrderPaymentTransactionCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderPaymentTransactionModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/payment-transactions',
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
     * Get order payment transaction collection.
     * Get order payment transaction collection.
     *
     * Required access scopes:
     * * read_orders
     * @param id Order ID
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderPaymentTransactionCollectionForOrder(
        id: number,
        q?: AmarantGetOrderPaymentTransactionCollectionForOrderSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderPaymentTransactionModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/{id}/payment-transactions',
            path: {
                'id': id,
            },
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
}
