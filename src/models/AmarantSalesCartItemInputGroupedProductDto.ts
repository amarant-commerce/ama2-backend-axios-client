/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
import type { AmarantSalesCartItemInputProductOptionsDto } from './AmarantSalesCartItemInputProductOptionsDto';
import type { AmarantSalesCartItemPricingInputDto } from './AmarantSalesCartItemPricingInputDto';
export type AmarantSalesCartItemInputGroupedProductDto = {
    sku: string;
    children: Array<AmarantSalesCartItemInputGenericProductDto>;
    type: 'grouped';
    pricing?: AmarantSalesCartItemPricingInputDto | null;
    additionalData?: Array<AmarantSalesCartAdditionalDataInputDto>;
    productOptions?: Array<AmarantSalesCartItemInputProductOptionsDto>;
};

