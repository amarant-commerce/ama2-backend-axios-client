/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantOrderCreditMemoAdjustmentModel } from './AmarantOrderCreditMemoAdjustmentModel';
export type AmarantOrderCreditMemoItemModel = {
    id: string;
    invoiceItemId?: string | null;
    adjustments: Array<AmarantOrderCreditMemoAdjustmentModel>;
    basePriceExTax: number;
    basePrice: number;
    priceExTax: number;
    price: number;
    baseSalePriceExTax: number;
    baseSalePrice: number;
    salePriceExTax: number;
    salePrice: number;
    baseFinalPriceExTax: number;
    baseFinalPrice: number;
    finalPriceExTax: number;
    finalPrice: number;
    baseFinalPriceExTaxFormatted: string;
    baseFinalPriceFormatted: string;
    finalPriceExTaxFormatted: string;
    finalPriceFormatted: string;
    qty: string;
    baseRowTotalExTax: number;
    rowTotalExTax: number;
    baseRowTotalInclTax: number;
    rowTotalInclTax: number;
    baseTaxAmount: number;
    taxAmount: number;
    taxPercent: string;
    baseDiscountAmount: number;
    discountAmount: number;
    discountPercent: string;
};

