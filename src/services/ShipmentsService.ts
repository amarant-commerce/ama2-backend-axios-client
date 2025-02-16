/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetOrderShipmentCollectionForOrderSearchCriteriaFilter } from '../models/AmarantGetOrderShipmentCollectionForOrderSearchCriteriaFilter';
import type { AmarantGetOrderShipmentCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderShipmentCollectionSearchCriteriaFilter';
import type { AmarantOrderShipmentModel } from '../models/AmarantOrderShipmentModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ShipmentsService {
    /**
     * Get shipment collection.
     * Get shipment collection.
     *
     * Required access scopes:
     * * read_orders
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderShipmentCollection(
        q?: AmarantGetOrderShipmentCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderShipmentModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/shipments',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get shipment collection.
     * Get shipment collection.
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
    public static getOrderShipmentCollectionForOrder(
        id: number,
        q?: AmarantGetOrderShipmentCollectionForOrderSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderShipmentModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1/{id}/shipments',
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
