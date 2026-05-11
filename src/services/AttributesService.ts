/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantAttributeModel } from '../models/AmarantAttributeModel';
import type { AmarantAttributeOptionModel } from '../models/AmarantAttributeOptionModel';
import type { AmarantGetAttributeCollectionSearchCriteriaFilter } from '../models/AmarantGetAttributeCollectionSearchCriteriaFilter';
import type { AmarantGetAttributeOptionCollectionSearchCriteriaFilter } from '../models/AmarantGetAttributeOptionCollectionSearchCriteriaFilter';
import type { UpdateAttributeOptionItemInputAmarantAttributeOptionInputDto } from '../models/UpdateAttributeOptionItemInputAmarantAttributeOptionInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttributesService {
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getAttributeCollection(
        q?: AmarantGetAttributeCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantAttributeModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1',
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
     * Get attribute option collection.
     * Get attribute option collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    public static getAttributeOptionCollection(
        q?: AmarantGetAttributeOptionCollectionSearchCriteriaFilter,
        page?: number,
        itemsPerPage?: number,
        include?: string,
        exclude?: string,
    ): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantAttributeOptionModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1/options',
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
     * Update attribute option item.
     * Update attribute option item.
     * @param id Attribute option ID.
     * @param formData
     * @returns AmarantAttributeOptionModel OK
     * @throws ApiError
     */
    public static updateAttributeOptionItem(
        id: number,
        formData: UpdateAttributeOptionItemInputAmarantAttributeOptionInputDto,
    ): CancelablePromise<AmarantAttributeOptionModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/attributes/v1/options/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
