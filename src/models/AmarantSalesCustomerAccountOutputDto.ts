/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantSalesCustomerAccountAddressOutputDto } from './AmarantSalesCustomerAccountAddressOutputDto';
import type { AmarantSalesCustomerAccountOrganizationOutputDto } from './AmarantSalesCustomerAccountOrganizationOutputDto';
import type { AmarantSalesCustomerAccountStateOutputDto } from './AmarantSalesCustomerAccountStateOutputDto';
export type AmarantSalesCustomerAccountOutputDto = {
    id: number;
    groupId?: number | null;
    groupName?: string | null;
    organization?: AmarantSalesCustomerAccountOrganizationOutputDto | null;
    username: string;
    email: string;
    channelId: number;
    channelCode: string;
    state: AmarantSalesCustomerAccountStateOutputDto;
    attributeSetId: number;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    addresses: Array<AmarantSalesCustomerAccountAddressOutputDto>;
    cartId?: string | null;
    impersonatedBy?: number | null;
    accessScopes: Array<string>;
    lastLoggedInTime?: string | null;
    lastSeenTime?: string | null;
    createdAt?: string | null;
};

