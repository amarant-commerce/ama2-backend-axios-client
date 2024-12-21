import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
export type AmarantSalesQuoteUpdateItemInputDto = {
    itemId: string;
    qty: number;
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
};
