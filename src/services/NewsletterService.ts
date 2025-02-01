/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetSalesNewsletterSubscriberCollectionSearchCriteriaFilter } from '../models/AmarantGetSalesNewsletterSubscriberCollectionSearchCriteriaFilter';
import type { AmarantSalesNewsletterSubscriberOutputDto } from '../models/AmarantSalesNewsletterSubscriberOutputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static getSalesNewsletterSubscriberCollection(
        q?: AmarantGetSalesNewsletterSubscriberCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesNewsletterSubscriberOutputDto>;
    })> {
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
    public static getSalesNewsletterSubscriberItem(
        id: number,
    ): CancelablePromise<AmarantSalesNewsletterSubscriberOutputDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/sales-newsletters/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
}
