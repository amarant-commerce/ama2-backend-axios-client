/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantOrderInvoiceAdjustmentModel } from './AmarantOrderInvoiceAdjustmentModel';
export type AmarantOrderInvoiceItemModel = {
    id: string;
    orderItemId?: string | null;
    adjustments: Array<AmarantOrderInvoiceAdjustmentModel>;
    basePriceExTax: number;
    basePrice: number;
    priceExTax: number;
    price: number;
    baseSalePriceExTax: number;
    baseSalePrice: number;
    salePriceExTax: number;
    salePrice: number;
    baseFinalPriceExTax: number;
    /**
     * Includes tax.
     */
    baseFinalPrice: number;
    finalPriceExTax: number;
    /**
     * Includes tax.
     */
    finalPrice: number;
    baseFinalPriceExTaxFormatted: string;
    /**
     * Includes tax.
     */
    baseFinalPriceFormatted: number;
    finalPriceExTaxFormatted: string;
    /**
     * Includes tax.
     */
    finalPriceFormatted: number;
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

