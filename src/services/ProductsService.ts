/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetProductCollectionSearchCriteriaFilter } from '../models/AmarantGetProductCollectionSearchCriteriaFilter';
import type { AmarantProductBackendOutputProductOutput } from '../models/AmarantProductBackendOutputProductOutput';
import type { AmarantProductCompatibleProductAttributesOutput } from '../models/AmarantProductCompatibleProductAttributesOutput';
import type { AmarantProductCsvSyncOutputDto } from '../models/AmarantProductCsvSyncOutputDto';
import type { AmarantProductWishlist } from '../models/AmarantProductWishlist';
import type { BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto } from '../models/BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto';
import type { GetConfigurableProductCompatibleAttributesInputAmarantProductGetCompatibleAttributesForConfigurableInputDto } from '../models/GetConfigurableProductCompatibleAttributesInputAmarantProductGetCompatibleAttributesForConfigurableInputDto';
import type { SyncProductCsvInputAmarantProductCsvSyncInputDto } from '../models/SyncProductCsvInputAmarantProductCsvSyncInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Get product collection.
     * Get product collection.
     *
     * Required access scopes:
     * * read_products
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getProductCollection(
        q?: AmarantGetProductCollectionSearchCriteriaFilter,
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
     *
     * Required access scopes:
     * * read_products
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
     *
     * Required access scopes:
     * * write_products
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static bulkDeleteProductItems(
        requestBody: BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/products/v1/bulk',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Sync product data from CSV.
     * Sync product data from CSV.
     *
     * Required access scopes:
     * * write_products
     * * write_categories
     * @param formData
     * @returns AmarantProductCsvSyncOutputDto Accepted
     * @throws ApiError
     */
    public static syncProductCsv(
        formData: SyncProductCsvInputAmarantProductCsvSyncInputDto,
    ): CancelablePromise<AmarantProductCsvSyncOutputDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/products/v1/sync/csv',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Get compatible configurable product attributes for given child SKUs.
     * Get compatible configurable product attributes for given child SKUs.
     *
     * Required access scopes:
     * * read_products
     * @param requestBody
     * @returns AmarantProductCompatibleProductAttributesOutput OK
     * @throws ApiError
     */
    public static getConfigurableProductCompatibleAttributes(
        requestBody: GetConfigurableProductCompatibleAttributesInputAmarantProductGetCompatibleAttributesForConfigurableInputDto,
    ): CancelablePromise<AmarantProductCompatibleProductAttributesOutput> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/products/v1/configurable/compatible-attributes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get product wishlist collection.
     * Get product wishlist collection.
     * @returns any OK
     * @throws ApiError
     */
    public static getProductWishlistCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantProductWishlist>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/product-wishlists/v1',
        });
    }
}
