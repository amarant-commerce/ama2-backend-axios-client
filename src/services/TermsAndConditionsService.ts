/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetTermsConditionsCollectionSearchCriteriaFilter } from '../models/AmarantGetTermsConditionsCollectionSearchCriteriaFilter';
import type { AmarantSalesTermsConditionsOutputDto } from '../models/AmarantSalesTermsConditionsOutputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TermsAndConditionsService {
    /**
     * Get terms and conditions collection.
     * Get terms and conditions collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getTermsConditionsCollection(
        q?: AmarantGetTermsConditionsCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantSalesTermsConditionsOutputDto>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/terms-conditions/v1',
            query: {
                'q': q,
                'page': page,
                'itemsPerPage': itemsPerPage,
                'include': include,
                'exclude': exclude,
            },
        });
    }
    /**
     * Get terms and conditions item.
     * Get terms and conditions item.
     * @param id Terms and conditions ID
     * @returns AmarantSalesTermsConditionsOutputDto OK
     * @throws ApiError
     */
    public static getTermsConditionsItem(
        id: number,
    ): CancelablePromise<AmarantSalesTermsConditionsOutputDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/terms-conditions/v1/{id}',
            path: {
                'id': id,
            },
        });
    }
}
