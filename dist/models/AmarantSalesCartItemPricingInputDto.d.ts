import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
export type AmarantSalesCartItemPricingInputDto = {
    basePrice?: string | null;
    salePrice?: string | null;
    reset?: boolean | null;
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
};
