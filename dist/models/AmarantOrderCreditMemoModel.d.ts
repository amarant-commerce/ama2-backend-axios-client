import type { AmarantOrderCreditMemoAdjustmentModel } from './AmarantOrderCreditMemoAdjustmentModel';
import type { AmarantOrderCreditMemoItemModel } from './AmarantOrderCreditMemoItemModel';
import type { AmarantOrderCreditMemoTotalModel } from './AmarantOrderCreditMemoTotalModel';
export type AmarantOrderCreditMemoModel = {
    id: string;
    orderId: string;
    invoiceId: string;
    status: string;
    items: Array<AmarantOrderCreditMemoItemModel>;
    adjustments: Array<AmarantOrderCreditMemoAdjustmentModel>;
    totals: Array<AmarantOrderCreditMemoTotalModel>;
    createdAt: string;
    updatedAt: string;
    baseGrandTotal: number;
    baseGrandTotalFormatted: string;
    grandTotal: number;
    grandTotalFormatted: string;
};
