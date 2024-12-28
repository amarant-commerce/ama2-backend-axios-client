/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCrmClientContactLogModel } from '../models/AmarantCrmClientContactLogModel';
import type { AmarantCrmClientModel } from '../models/AmarantCrmClientModel';
import type { AmarantGetCrmClientCollectionSearchCriteriaFilter } from '../models/AmarantGetCrmClientCollectionSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CrmService {
    /**
     * Get client collection.
     * Get client collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCrmClientCollection(
        q?: AmarantGetCrmClientCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCrmClientModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/crm/v1/clients',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get client item.
     * Get client item.
     * @param id Client ID
     * @returns AmarantCrmClientModel OK
     * @throws ApiError
     */
    public static getCrmClientItem(
        id: number,
    ): CancelablePromise<AmarantCrmClientModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/crm/v1/clients/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get client contact log collection.
     * Get client contact log collection.
     * @param id Client contact log ID
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCrmClientContactLogCollection(
        id: number,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCrmClientContactLogModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/crm/v1/clients/{id}/contact-logs',
            path: {
                'id': id,
            },
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
}
