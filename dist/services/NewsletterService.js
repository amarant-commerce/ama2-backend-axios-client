import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NewsletterService {
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
    static getSalesNewsletterSubscriberCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales-newsletters/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
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
    static getSalesNewsletterSubscriberItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales-newsletters/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
}
