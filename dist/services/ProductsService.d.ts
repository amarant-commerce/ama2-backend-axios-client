import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantProductBackendOutputProductOutput } from '../models/AmarantProductBackendOutputProductOutput';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ProductsService {
    /**
     * Get product collection.
     * Get product collection.
     * @param q Search criteria query.
     * @param page PageModel.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getProductCollection(q?: AmarantSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantProductBackendOutputProductOutput>;
    })>;
    /**
     * Get product item.
     * Get product item.
     * @param id Product ID
     * @returns AmarantProductBackendOutputProductOutput OK
     * @throws ApiError
     */
    static getProductItem(id: number): CancelablePromise<AmarantProductBackendOutputProductOutput>;
}
