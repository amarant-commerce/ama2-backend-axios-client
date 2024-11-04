import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetOrderCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderCollectionSearchCriteriaFilter';
import type { AmarantGetOrderPaymentTransactionCollectionForOrderSearchCriteriaFilter } from '../models/AmarantGetOrderPaymentTransactionCollectionForOrderSearchCriteriaFilter';
import type { AmarantGetOrderPaymentTransactionCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderPaymentTransactionCollectionSearchCriteriaFilter';
import type { AmarantOrderModel } from '../models/AmarantOrderModel';
import type { AmarantOrderPaymentTransactionModel } from '../models/AmarantOrderPaymentTransactionModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OrdersService {
    /**
     * Get order collection.
     * Get order collection.
     *
     * Required access scopes:
     * * read_orders
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getOrderCollection(q?: AmarantGetOrderCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderModel>;
    })>;
    /**
     * Get order payment transaction collection.
     * Get order payment transaction collection.
     *
     * Required access scopes:
     * * read_orders
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getOrderPaymentTransactionCollection(q?: AmarantGetOrderPaymentTransactionCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderPaymentTransactionModel>;
    })>;
    /**
     * Get order payment transaction collection.
     * Get order payment transaction collection.
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
    static getOrderPaymentTransactionCollectionForOrder(id: number, q?: AmarantGetOrderPaymentTransactionCollectionForOrderSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderPaymentTransactionModel>;
    })>;
}
