export type AmarantSalesCustomerPricingInputModel = {
    id: number;
    channelId: number;
    entityType: AmarantSalesCustomerPricingInputModel.entityType;
    customerOrOrganizationId?: number | null;
    productId: number;
    amountType: number;
    amount: (number | string);
    qty: (number | string);
    meta: Record<string, any>;
};
export declare namespace AmarantSalesCustomerPricingInputModel {
    enum entityType {
        CUSTOMER = "customer",
        ORGANIZATION = "organization"
    }
}
