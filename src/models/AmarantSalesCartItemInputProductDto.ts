/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputConfigurableProductDto } from './AmarantSalesCartItemInputConfigurableProductDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
import type { AmarantSalesCartItemInputGroupedProductDto } from './AmarantSalesCartItemInputGroupedProductDto';
import type { AmarantSalesCartItemPricingInputDto } from './AmarantSalesCartItemPricingInputDto';
export type AmarantSalesCartItemInputProductDto = (AmarantSalesCartItemInputGenericProductDto | AmarantSalesCartItemInputGroupedProductDto | AmarantSalesCartItemInputConfigurableProductDto | {
    type: AmarantSalesCartItemInputProductDto.type;
    pricing?: AmarantSalesCartItemPricingInputDto | null;
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
});
export namespace AmarantSalesCartItemInputProductDto {
    export enum type {
        GENERIC = 'generic',
        GROUPED = 'grouped',
        CONFIGURABLE = 'configurable',
    }
}

