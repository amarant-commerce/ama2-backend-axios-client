/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemPricingInputDto } from './AmarantSalesCartItemPricingInputDto';
export type AmarantSalesQuoteUpdateItemInputDto = {
    itemId: string;
    qty: number;
    pricing?: AmarantSalesCartItemPricingInputDto | null;
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
};

