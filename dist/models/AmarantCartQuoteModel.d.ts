import type { AmarantCartModel } from './AmarantCartModel';
export type AmarantCartQuoteModel = {
    id: number;
    state: number;
    stateText: string;
    customer?: string | null;
    organizationId?: number | null;
    organization?: string | null;
    cart: AmarantCartModel;
    createdAt: string;
    updatedAt: string;
};
