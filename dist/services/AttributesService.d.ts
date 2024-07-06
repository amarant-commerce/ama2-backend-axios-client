import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantAttributeModel } from '../models/AmarantAttributeModel';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AttributesService {
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @param q Search criteria query.
     * @returns any OK
     * @throws ApiError
     */
    static getAttributeCollection(q?: AmarantSearchCriteriaFilter): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantAttributeModel>;
    })>;
}
