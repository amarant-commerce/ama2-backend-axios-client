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
    channels: Array<number>;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    createdAt: string;
    updatedAt: string;
};
