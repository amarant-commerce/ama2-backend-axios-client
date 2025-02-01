import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetSalesNewsletterSubscriberCollectionSearchCriteriaFilter } from '../models/AmarantGetSalesNewsletterSubscriberCollectionSearchCriteriaFilter';
import type { AmarantSalesNewsletterSubscriberOutputDto } from '../models/AmarantSalesNewsletterSubscriberOutputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class NewsletterService {
    /**
     * Get sales newsletter subscriber collection.
     * Get sales newsletter subscriber collection.
     *
     * Required access scopes:
     * * read_sales_newsletter_subscribers
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getSalesNewsletterSubscriberCollection(q?: AmarantGetSalesNewsletterSubscriberCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesNewsletterSubscriberOutputDto>;
    })>;
    /**
     * Get sales newsletter subscriber item.
     * Get sales newsletter subscriber item.
     *
     * Required access scopes:
     * * read_sales_newsletter_subscribers
     * @param id Subscriber ID
     * @returns AmarantSalesNewsletterSubscriberOutputDto OK
     * @throws ApiError
     */
    static getSalesNewsletterSubscriberItem(id: number): CancelablePromise<AmarantSalesNewsletterSubscriberOutputDto>;
}
