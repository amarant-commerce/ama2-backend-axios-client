export type AmarantSalesCustomerPricingModel = {
    id: number;
    channelId: number;
    customerId?: number | null;
    customerUsername?: string | null;
    organizationId?: number | null;
    organizationName?: string | null;
    productId: number;
    sku: string;
    amountType: number;
    amountTypeName: string;
    amount: string;
    qty: string;
    meta: Record<string, any>;
};
