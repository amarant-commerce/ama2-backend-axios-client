import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantAttributeModel } from '../models/AmarantAttributeModel';
import type { AmarantAttributeOptionModel } from '../models/AmarantAttributeOptionModel';
import type { AmarantGetAttributeCollectionSearchCriteriaFilter } from '../models/AmarantGetAttributeCollectionSearchCriteriaFilter';
import type { AmarantGetAttributeOptionCollectionSearchCriteriaFilter } from '../models/AmarantGetAttributeOptionCollectionSearchCriteriaFilter';
import type { UpdateAttributeOptionItemInputAmarantAttributeOptionInputDto } from '../models/UpdateAttributeOptionItemInputAmarantAttributeOptionInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AttributesService {
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getAttributeCollection(q?: AmarantGetAttributeCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantAttributeModel>;
    })>;
    /**
     * Get attribute option collection.
     * Get attribute option collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getAttributeOptionCollection(q?: AmarantGetAttributeOptionCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantAttributeOptionModel>;
    })>;
    /**
     * Update attribute option item.
     * Update attribute option item.
     * @param id Attribute option ID.
     * @param requestBody
     * @returns AmarantAttributeOptionModel Resource updated.
     * @throws ApiError
     */
    static updateAttributeOptionItem(id: number, requestBody: UpdateAttributeOptionItemInputAmarantAttributeOptionInputDto): CancelablePromise<AmarantAttributeOptionModel>;
}
