export type AmarantOrderShipmentItemModel = {
    id: number;
    batchItemId: number;
    productSku?: string | null;
    productName?: string | null;
    qty: string;
    weight: string;
};
