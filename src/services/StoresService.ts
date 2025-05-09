/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetChannelCollectionSearchCriteriaFilter } from '../models/AmarantGetChannelCollectionSearchCriteriaFilter';
import type { AmarantGetChannelDomainCollectionSearchCriteriaFilter } from '../models/AmarantGetChannelDomainCollectionSearchCriteriaFilter';
import type { AmarantGetChannelScopeCollectionSearchCriteriaFilter } from '../models/AmarantGetChannelScopeCollectionSearchCriteriaFilter';
import type { AmarantStoreChannelDomainModel } from '../models/AmarantStoreChannelDomainModel';
import type { AmarantStoreChannelModel } from '../models/AmarantStoreChannelModel';
import type { AmarantStoreChannelScopeModel } from '../models/AmarantStoreChannelScopeModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoresService {
    /**
     * Get store channel collection.
     * Get store channel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getChannelCollection(
        q?: AmarantGetChannelCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantStoreChannelModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channels',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get store channel item.
     * Get store channel item.
     * @param id Channel ID.
     * @returns AmarantStoreChannelModel OK
     * @throws ApiError
     */
    public static getChannelItem(
        id: number,
    ): CancelablePromise<AmarantStoreChannelModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channels/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get store channel scope collection.
     * Get store channel scope collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getChannelScopeCollection(
        q?: AmarantGetChannelScopeCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantStoreChannelScopeModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-scopes',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get store channel scope item.
     * Get store channel scope item.
     * @param id Channel scope ID.
     * @returns AmarantStoreChannelScopeModel OK
     * @throws ApiError
     */
    public static getChannelScopeItem(
        id: number,
    ): CancelablePromise<AmarantStoreChannelScopeModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-scopes/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get store channel domain collection.
     * Get store channel domain collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getChannelDomainCollection(
        q?: AmarantGetChannelDomainCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantStoreChannelDomainModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-domains',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get store channel domain item.
     * Get store channel domain item.
     * @param id Channel ID.
     * @returns AmarantStoreChannelDomainModel OK
     * @throws ApiError
     */
    public static getChannel(
        id: number,
    ): CancelablePromise<AmarantStoreChannelDomainModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-domains/{id}',
            path: {
                'id': id,
            },
        });
    }
}
