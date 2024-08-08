/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantSalesCustomerAccountOutputDto } from '../models/AmarantSalesCustomerAccountOutputDto';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomersService {
    /**
     * Get customer collection.
     * Get customer collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCustomerCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesCustomerAccountOutputDto>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get customer item.
     * Get customer item.
     * @param id Customer ID
     * @returns AmarantSalesCustomerAccountOutputDto OK
     * @throws ApiError
     */
    public static getCustomerItem(
        id: number,
    ): CancelablePromise<AmarantSalesCustomerAccountOutputDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
}