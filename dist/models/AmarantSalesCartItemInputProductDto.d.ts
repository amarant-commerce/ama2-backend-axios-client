import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputConfigurableProductDto } from './AmarantSalesCartItemInputConfigurableProductDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
import type { AmarantSalesCartItemInputGroupedProductDto } from './AmarantSalesCartItemInputGroupedProductDto';
import type { AmarantSalesCartItemInputProductOptionsDto } from './AmarantSalesCartItemInputProductOptionsDto';
import type { AmarantSalesCartItemPricingInputDto } from './AmarantSalesCartItemPricingInputDto';
export type AmarantSalesCartItemInputProductDto = (AmarantSalesCartItemInputGenericProductDto | AmarantSalesCartItemInputGroupedProductDto | AmarantSalesCartItemInputConfigurableProductDto | {
    type: AmarantSalesCartItemInputProductDto.type;
    pricing?: AmarantSalesCartItemPricingInputDto | null;
    additionalData?: Array<AmarantSalesCartAdditionalDataInputDto>;
    productOptions?: Array<AmarantSalesCartItemInputProductOptionsDto>;
});
export declare namespace AmarantSalesCartItemInputProductDto {
    enum type {
        GENERIC = "generic",
        GROUPED = "grouped",
        CONFIGURABLE = "configurable"
    }
}
