/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetOrderCreditMemoCollectionForOrderSearchCriteriaFilter } from '../models/AmarantGetOrderCreditMemoCollectionForOrderSearchCriteriaFilter';
import type { AmarantGetOrderCreditMemoCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderCreditMemoCollectionSearchCriteriaFilter';
import type { AmarantGetOrderInvoiceCollectionForOrderSearchCriteriaFilter } from '../models/AmarantGetOrderInvoiceCollectionForOrderSearchCriteriaFilter';
import type { AmarantGetOrderInvoiceCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderInvoiceCollectionSearchCriteriaFilter';
import type { AmarantOrderCreditMemoModel } from '../models/AmarantOrderCreditMemoModel';
import type { AmarantOrderInvoiceModel } from '../models/AmarantOrderInvoiceModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InvoicesService {
    /**
     * Get invoice collection.
     * Get invoice collection.
     *
     * Required access scopes:
     * * read_orders
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderInvoiceCollection(
        q?: AmarantGetOrderInvoiceCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderInvoiceModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/invoices',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get invoice collection.
     * Get invoice collection.
     *
     * Required access scopes:
     * * read_orders
     * @param id Order ID
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderInvoiceCollectionForOrder(
        id: number,
        q?: AmarantGetOrderInvoiceCollectionForOrderSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderInvoiceModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/{id}/invoices',
            path: {
                'id': id,
            },
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get credit memo collection.
     * Get credit memo collection.
     *
     * Required access scopes:
     * * read_orders
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderCreditMemoCollection(
        q?: AmarantGetOrderCreditMemoCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderCreditMemoModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/credit-memos',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get credit memo collection.
     * Get credit memo collection.
     *
     * Required access scopes:
     * * read_orders
     * @param id Order ID
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderCreditMemoCollectionForOrder(
        id: number,
        q?: AmarantGetOrderCreditMemoCollectionForOrderSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderCreditMemoModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/{id}/credit-memos',
            path: {
                'id': id,
            },
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
}
