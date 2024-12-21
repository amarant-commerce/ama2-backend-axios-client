import type { AmarantCartModel } from './AmarantCartModel';
export type AmarantCartQuoteModel = {
    id: string;
    status: number;
    cart: AmarantCartModel;
    createdAt: string;
    updatedAt: string;
};
