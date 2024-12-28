import type { AmarantSalesCartItemInputProductDto } from './AmarantSalesCartItemInputProductDto';
import type { AmarantSalesQuoteUpdateItemInputDto } from './AmarantSalesQuoteUpdateItemInputDto';
export type UpdateQuoteItemInputAmarantSalesQuoteInputDto = {
    customerId?: number | null;
    globalTaxPercentage?: number | null;
    additions: Array<AmarantSalesCartItemInputProductDto>;
    updates: Array<AmarantSalesQuoteUpdateItemInputDto>;
    removals: Array<string>;
};