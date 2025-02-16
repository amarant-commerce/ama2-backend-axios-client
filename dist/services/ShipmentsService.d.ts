import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetOrderShipmentCollectionForOrderSearchCriteriaFilter } from '../models/AmarantGetOrderShipmentCollectionForOrderSearchCriteriaFilter';
import type { AmarantGetOrderShipmentCollectionSearchCriteriaFilter } from '../models/AmarantGetOrderShipmentCollectionSearchCriteriaFilter';
import type { AmarantOrderShipmentModel } from '../models/AmarantOrderShipmentModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ShipmentsService {
    /**
     * Get shipment collection.
     * Get shipment collection.
     *
     * Required access scopes:
     * * read_orders
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getOrderShipmentCollection(q?: AmarantGetOrderShipmentCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderShipmentModel>;
    })>;
    /**
     * Get shipment collection.
     * Get shipment collection.
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
    static getOrderShipmentCollectionForOrder(id: number, q?: AmarantGetOrderShipmentCollectionForOrderSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantOrderShipmentModel>;
    })>;
}
