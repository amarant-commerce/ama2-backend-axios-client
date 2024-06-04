import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantOrderModel } from '../models/AmarantOrderModel';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OrdersService {
    /**
     * Get order collection.
     * Get order collection.
     * @param q Search criteria query.
     * @returns any OK
     * @throws ApiError
     */
    static getOrderCollection(q?: AmarantSearchCriteriaFilter): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantOrderModel>;
    })>;
}
