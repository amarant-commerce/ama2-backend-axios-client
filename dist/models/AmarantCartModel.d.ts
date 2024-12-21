import type { AmarantCartAdjustmentModel } from './AmarantCartAdjustmentModel';
import type { AmarantCartCustomerModel } from './AmarantCartCustomerModel';
import type { AmarantCartItemModel } from './AmarantCartItemModel';
import type { AmarantCartPaymentModel } from './AmarantCartPaymentModel';
import type { AmarantCartShippingBatchModel } from './AmarantCartShippingBatchModel';
import type { AmarantCartTotalModel } from './AmarantCartTotalModel';
export type AmarantCartModel = {
    id: string;
    channelId: number;
    baseCurrency: string;
    currency: string;
    conversionRate?: string | null;
    physical: boolean;
    customer?: AmarantCartCustomerModel | null;
    items: Array<AmarantCartItemModel>;
    payments: Array<AmarantCartPaymentModel>;
    shippingBatches: Array<AmarantCartShippingBatchModel>;
    adjustments: Array<AmarantCartAdjustmentModel>;
    totals: Array<AmarantCartTotalModel>;
    createdAt: string;
    updatedAt: string;
};
