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
