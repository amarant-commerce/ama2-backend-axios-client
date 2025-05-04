import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemPricingInputDto } from './AmarantSalesCartItemPricingInputDto';
export type AmarantSalesCartItemInputConfigurableProductDto = {
    sku: string;
    parentSku: string;
    qty: number;
    type: 'configurable';
    pricing?: AmarantSalesCartItemPricingInputDto | null;
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
};
