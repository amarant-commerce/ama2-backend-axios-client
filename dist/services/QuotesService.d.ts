import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCartQuoteModel } from '../models/AmarantCartQuoteModel';
import type { AmarantGetQuoteCollectionSearchCriteriaFilter } from '../models/AmarantGetQuoteCollectionSearchCriteriaFilter';
import type { UpdateQuoteItemInputAmarantSalesQuoteInputDto } from '../models/UpdateQuoteItemInputAmarantSalesQuoteInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class QuotesService {
    /**
     * Get quote collection.
     * Get quote collection.
     *
     * Required access scopes:
     * * read_quotes
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getQuoteCollection(q?: AmarantGetQuoteCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCartQuoteModel>;
    })>;
    /**
     * Get quote item.
     * Get quote item.
     *
     * Required access scopes:
     * * read_quotes
     * @param id Quote ID
     * @returns AmarantCartQuoteModel OK
     * @throws ApiError
     */
    static getQuoteItem(id: number): CancelablePromise<AmarantCartQuoteModel>;
    /**
     * Update quote item.
     * Update quote item.
     *
     * Required access scopes:
     * * write_quotes
     * @param id Quote ID
     * @param requestBody
     * @returns AmarantCartQuoteModel Resource updated.
     * @throws ApiError
     */
    static updateQuoteItem(id: number, requestBody: UpdateQuoteItemInputAmarantSalesQuoteInputDto): CancelablePromise<AmarantCartQuoteModel>;
}
