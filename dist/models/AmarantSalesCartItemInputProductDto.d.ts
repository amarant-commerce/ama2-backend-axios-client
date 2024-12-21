import type { AmarantSalesCartAdditionalDataInputDto } from './AmarantSalesCartAdditionalDataInputDto';
import type { AmarantSalesCartItemInputGenericProductDto } from './AmarantSalesCartItemInputGenericProductDto';
import type { AmarantSalesCartItemInputGroupedProductDto } from './AmarantSalesCartItemInputGroupedProductDto';
export type AmarantSalesCartItemInputProductDto = (AmarantSalesCartItemInputGenericProductDto | AmarantSalesCartItemInputGroupedProductDto | {
    type: AmarantSalesCartItemInputProductDto.type;
    additionalData: Array<AmarantSalesCartAdditionalDataInputDto>;
});
export declare namespace AmarantSalesCartItemInputProductDto {
    enum type {
        GENERIC = "generic",
        GROUPED = "grouped"
    }
}
