import type { AmarantOrderShipmentItemModel } from './AmarantOrderShipmentItemModel';
export type AmarantOrderShipmentModel = {
    id: number;
    orderId: number;
    batchId: number;
    status: string;
    carrierTitle: string;
    carrierStatus?: string | null;
    carrierStatusCode?: string | null;
    trackingNumbers: Array<string>;
    weight: string;
    items: Array<AmarantOrderShipmentItemModel>;
    createdAt: string;
    updatedAt: string;
};
