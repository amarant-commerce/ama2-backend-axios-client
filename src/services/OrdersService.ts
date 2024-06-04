/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantOrderModel } from '../models/AmarantOrderModel';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * Get order collection.
     * Get order collection.
     * @param q Search criteria query.
     * @returns any OK
     * @throws ApiError
     */
    public static getOrderCollection(
        q?: AmarantSearchCriteriaFilter,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantOrderModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/orders/v1',
            query: {
                'q': q,
            },
        });
    }
}
