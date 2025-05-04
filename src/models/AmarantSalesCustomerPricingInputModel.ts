/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantSalesCustomerPricingInputModel = {
    id: number;
    channelId: number;
    entityType: AmarantSalesCustomerPricingInputModel.entityType;
    entityId?: number | null;
    productId: number;
    amountType: number;
    amount: (number | string);
    qty: (number | string);
    meta?: Record<string, any> | null;
};
export namespace AmarantSalesCustomerPricingInputModel {
    export enum entityType {
        CUSTOMER = 'customer',
        ORGANIZATION = 'organization',
    }
}

