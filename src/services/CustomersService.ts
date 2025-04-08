/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetCustomerCollectionSearchCriteriaFilter } from '../models/AmarantGetCustomerCollectionSearchCriteriaFilter';
import type { AmarantGetCustomerOrganizationCollectionSearchCriteriaFilter } from '../models/AmarantGetCustomerOrganizationCollectionSearchCriteriaFilter';
import type { AmarantGetCustomerPricingCollectionSearchCriteriaFilter } from '../models/AmarantGetCustomerPricingCollectionSearchCriteriaFilter';
import type { AmarantSalesCustomerAccountOrganizationOutputDto } from '../models/AmarantSalesCustomerAccountOrganizationOutputDto';
import type { AmarantSalesCustomerAccountOutputDto } from '../models/AmarantSalesCustomerAccountOutputDto';
import type { AmarantSalesCustomerPricingModel } from '../models/AmarantSalesCustomerPricingModel';
import type { RemoveCustomerPricingBulkInputAmarantSalesCustomerPricingBulkDeleteInputModel } from '../models/RemoveCustomerPricingBulkInputAmarantSalesCustomerPricingBulkDeleteInputModel';
import type { UpdateCustomerPricingBulkInputAmarantSalesCustomerPricingBulkInputModel } from '../models/UpdateCustomerPricingBulkInputAmarantSalesCustomerPricingBulkInputModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomersService {
    /**
     * Get customer collection.
     * Get customer collection.
     *
     * Required access scopes:
     * * read_customers
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCustomerCollection(
        q?: AmarantGetCustomerCollectionSearchCriteriaFilter,
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
     *
     * Required access scopes:
     * * read_customers
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
    /**
     * Get customer organization collection.
     * Get customer organization collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCustomerOrganizationCollection(
        q?: AmarantGetCustomerOrganizationCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesCustomerAccountOrganizationOutputDto>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/organizations',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get customer organization item.
     * Get customer organization item.
     * @param id Customer organization ID
     * @returns AmarantSalesCustomerAccountOrganizationOutputDto OK
     * @throws ApiError
     */
    public static getCustomerOrganizationItem(
        id: number,
    ): CancelablePromise<AmarantSalesCustomerAccountOrganizationOutputDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customers/v1/organizations/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get customer pricing collection.
     * Get customer pricing collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getCustomerPricingCollection(
        q?: AmarantGetCustomerPricingCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesCustomerPricingModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/customer-pricing/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Bulk update customer pricing.
     * Bulk update customer pricing.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static updateCustomerPricingBulk(
        requestBody: UpdateCustomerPricingBulkInputAmarantSalesCustomerPricingBulkInputModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/customer-pricing/v1/bulk',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Bulk delete customer pricing.
     * Bulk delete customer pricing.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static removeCustomerPricingBulk(
        requestBody: RemoveCustomerPricingBulkInputAmarantSalesCustomerPricingBulkDeleteInputModel,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/customer-pricing/v1/bulk',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
