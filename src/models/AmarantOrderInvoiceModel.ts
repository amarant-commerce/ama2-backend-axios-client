/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantOrderInvoiceAdjustmentModel } from './AmarantOrderInvoiceAdjustmentModel';
import type { AmarantOrderInvoiceItemModel } from './AmarantOrderInvoiceItemModel';
import type { AmarantOrderInvoiceTotalModel } from './AmarantOrderInvoiceTotalModel';
export type AmarantOrderInvoiceModel = {
    id: string;
    orderId: string;
    paymentId?: string | null;
    items: Array<AmarantOrderInvoiceItemModel>;
    adjustments: Array<AmarantOrderInvoiceAdjustmentModel>;
    totals: Array<AmarantOrderInvoiceTotalModel>;
    createdAt: string;
    updatedAt: string;
    baseGrandTotal: number;
    baseGrandTotalFormatted: string;
    grandTotal: number;
    grandTotalFormatted: string;
};

