import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantSalesCustomerAccountOrganizationOutputDto } from '../models/AmarantSalesCustomerAccountOrganizationOutputDto';
import type { AmarantSalesCustomerAccountOutputDto } from '../models/AmarantSalesCustomerAccountOutputDto';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CustomersService {
    /**
     * Get customer collection.
     * Get customer collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCustomerCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesCustomerAccountOutputDto>;
    })>;
    /**
     * Get customer item.
     * Get customer item.
     * @param id Customer ID
     * @returns AmarantSalesCustomerAccountOutputDto OK
     * @throws ApiError
     */
    static getCustomerItem(id: number): CancelablePromise<AmarantSalesCustomerAccountOutputDto>;
    /**
     * Get customer organization collection.
     * Get customer organization collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCustomerOrganizationCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesCustomerAccountOrganizationOutputDto>;
    })>;
    /**
     * Get customer organization item.
     * Get customer organization item.
     * @param id Customer organization ID
     * @returns AmarantSalesCustomerAccountOrganizationOutputDto OK
     * @throws ApiError
     */
    static getCustomerOrganizationItem(id: number): CancelablePromise<AmarantSalesCustomerAccountOrganizationOutputDto>;
}
