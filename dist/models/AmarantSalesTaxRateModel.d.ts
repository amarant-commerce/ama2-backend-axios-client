export type AmarantSalesTaxRateModel = {
    id: number;
    taxCategoryId: number;
    taxCategoryCode: string;
    name: string;
    countryCode: string;
    regionId?: string | null;
    postcode?: string | null;
    amount: string;
    zipRange: boolean;
    zipRangeFrom?: string | null;
    zipRangeTo?: string | null;
};
