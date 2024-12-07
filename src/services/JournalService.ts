/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetJournalEntryCollectionSearchCriteriaFilter } from '../models/AmarantGetJournalEntryCollectionSearchCriteriaFilter';
import type { AmarantJournalEntryModel } from '../models/AmarantJournalEntryModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class JournalService {
    /**
     * Get journal entry collection.
     * Get journal entry collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    public static getJournalEntryCollection(
        q?: AmarantGetJournalEntryCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantJournalEntryModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/journal/v1/entries',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
}
