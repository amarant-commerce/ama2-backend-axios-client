/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantAttributeModel } from '../models/AmarantAttributeModel';
import type { AmarantSearchCriteriaFilter } from '../models/AmarantSearchCriteriaFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttributesService {
    /**
     * Get attribute collection.
     * Get attribute collection.
     * @param q Search criteria query.
     * @returns any OK
     * @throws ApiError
     */
    public static getAttributeCollection(
        q?: AmarantSearchCriteriaFilter,
    ): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantAttributeModel>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/attributes/v1',
            query: {
                'q': q,
            },
        });
    }
}
