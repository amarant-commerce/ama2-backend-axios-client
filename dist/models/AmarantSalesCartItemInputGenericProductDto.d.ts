import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputProductOptionsDto } from './AmarantSalesCartItemInputProductOptionsDto';
import type { AmarantSalesCartItemPricingInputDto } from './AmarantSalesCartItemPricingInputDto';
export type AmarantSalesCartItemInputGenericProductDto = {
    sku: string;
    qty: number;
    type: 'generic';
    pricing?: AmarantSalesCartItemPricingInputDto | null;
    additionalData?: Array<AmarantSalesCartAdditionalDataInputDto>;
    productOptions?: Array<AmarantSalesCartItemInputProductOptionsDto>;
};
