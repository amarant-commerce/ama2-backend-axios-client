import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetOrderCreditMemoCollectionForOrderSearchCriteriaFilter } from '../models/AmarantGetOrderCreditMemoCollectionForOrderSearchCriteriaFilter';
import type { AmarantGetOrderCreditMemoCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderCreditMemoCollectionSearchCriteriaFilter';
import type { AmarantGetOrderInvoiceCollectionForOrderSearchCriteriaFilter } from '../models/AmarantGetOrderInvoiceCollectionForOrderSearchCriteriaFilter';
import type { AmarantGetOrderInvoiceCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderInvoiceCollectionSearchCriteriaFilter';
import type { AmarantOrderCreditMemoModel } from '../models/AmarantOrderCreditMemoModel';
import type { AmarantOrderInvoiceModel } from '../models/AmarantOrderInvoiceModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class InvoicesService {
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
    static getOrderInvoiceCollection(q?: AmarantGetOrderInvoiceCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderInvoiceModel>;
    })>;
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
    static getOrderInvoiceCollectionForOrder(id: number, q?: AmarantGetOrderInvoiceCollectionForOrderSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderInvoiceModel>;
    })>;
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
    static getOrderCreditMemoCollection(q?: AmarantGetOrderCreditMemoCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderCreditMemoModel>;
    })>;
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
    static getOrderCreditMemoCollectionForOrder(id: number, q?: AmarantGetOrderCreditMemoCollectionForOrderSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderCreditMemoModel>;
    })>;
}
