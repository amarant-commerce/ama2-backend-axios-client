/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantProductWishlistProduct } from './AmarantProductWishlistProduct';
export type AmarantProductWishlist = {
    id: string;
    customerId: number;
    email: string;
    organizationId?: number | null;
    organizationName?: string | null;
    name: string;
    shared: boolean;
    items: Array<AmarantProductWishlistProduct>;
    itemCount: number;
};

