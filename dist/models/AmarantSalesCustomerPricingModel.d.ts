export type AmarantSalesCustomerPricingModel = {
    id: number;
    channelId: number;
    channelName: string;
    customerId?: number | null;
    organizationId?: number | null;
    entityType: string;
    entityId: number;
    entityName: string;
    productId: number;
    sku: string;
    amountType: number;
    amountTypeName: string;
    amount: string;
    qty: string;
    meta: Record<string, any>;
    createdAt: string;
    updatedAt: string;
};
