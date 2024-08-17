import type { AmarantSalesCustomerAccountAddressOutputDto } from './AmarantSalesCustomerAccountAddressOutputDto';
import type { AmarantSalesCustomerAccountStateOutputDto } from './AmarantSalesCustomerAccountStateOutputDto';
export type AmarantSalesCustomerAccountOutputDto = {
    id: number;
    groupId?: number | null;
    organizationId?: number | null;
    username: string;
    email: string;
    channelId: number;
    channelName: string;
    state: AmarantSalesCustomerAccountStateOutputDto;
    attributeSetId: number;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    addresses: Array<AmarantSalesCustomerAccountAddressOutputDto>;
    cartId?: string | null;
    lastLoggedInTime?: string | null;
    lastSeenTime?: string | null;
    createdAt?: string | null;
};
