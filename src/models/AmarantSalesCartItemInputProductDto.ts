/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
import type { AmarantSalesCartItemInputGroupedProductDto } from './AmarantSalesCartItemInputGroupedProductDto';
export type AmarantSalesCartItemInputProductDto = (AmarantSalesCartItemInputGenericProductDto | AmarantSalesCartItemInputGroupedProductDto | {
    type: AmarantSalesCartItemInputProductDto.type;
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
});
export namespace AmarantSalesCartItemInputProductDto {
    export enum type {
        GENERIC = 'generic',
        GROUPED = 'grouped',
    }
}

