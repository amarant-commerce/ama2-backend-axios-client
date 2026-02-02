import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantCookiePanelModel } from '../models/AmarantCookiePanelModel';
import type { AmarantGetCookiePanelCollectionSearchCriteriaFilter } from '../models/AmarantGetCookiePanelCollectionSearchCriteriaFilter';
import type { AmarantSalesAnalyticsSaleHistoryModel } from '../models/AmarantSalesAnalyticsSaleHistoryModel';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AnalyticsService {
    /**
     * Get cookie panel collection.
     * Get cookie panel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getCookiePanelCollection(q?: AmarantGetCookiePanelCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantCookiePanelModel>;
    })>;
    /**
     * Get cookie panel item.
     * Get cookie panel item.
     * @param id Cookie panel ID
     * @returns AmarantCookiePanelModel OK
     * @throws ApiError
     */
    static getCookiePanelItem(id: number): CancelablePromise<AmarantCookiePanelModel>;
    /**
     * Get sales analytics order sale history collection.
     * Get sales analytics order sale history collection.
     * @param unit Unit of age of data.
     * @param age Value of age of data.
     * @returns any OK
     * @throws ApiError
     */
    static getSalesAnalyticsOrderSaleHistory(unit: 'days', age: number): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantSalesAnalyticsSaleHistoryModel>;
    })>;
}
