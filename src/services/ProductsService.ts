/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantProductBackendOutputProductOutput } from '../models/AmarantProductBackendOutputProductOutput';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto } from '../models/BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Get product collection.
     * Get product collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getProductCollection(
        q?: AmarantSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantProductBackendOutputProductOutput>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get product item.
     * Get product item.
     * @param id Product ID
     * @returns AmarantProductBackendOutputProductOutput OK
     * @throws ApiError
     */
    public static getProductItem(
        id: number,
    ): CancelablePromise<AmarantProductBackendOutputProductOutput> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/products/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Bulk delete product items.
     * Bulk delete product items.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static bulkDeleteProductItems(
        requestBody?: BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/products/v1/bulk',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
