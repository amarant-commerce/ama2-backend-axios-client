import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetTermsConditionsCollectionSearchCriteriaFilter } from '../models/AmarantGetTermsConditionsCollectionSearchCriteriaFilter';
import type { AmarantSalesTermsConditionsOutputDto } from '../models/AmarantSalesTermsConditionsOutputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TermsAndConditionsService {
    /**
     * Get terms and conditions collection.
     * Get terms and conditions collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getTermsConditionsCollection(q?: AmarantGetTermsConditionsCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesTermsConditionsOutputDto>;
    })>;
    /**
     * Get terms and conditions item.
     * Get terms and conditions item.
     * @param id Terms and conditions ID
     * @returns AmarantSalesTermsConditionsOutputDto OK
     * @throws ApiError
     */
    static getTermsConditionsItem(id: number): CancelablePromise<AmarantSalesTermsConditionsOutputDto>;
}
