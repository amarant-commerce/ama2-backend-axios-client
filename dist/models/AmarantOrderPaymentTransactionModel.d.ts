export type AmarantOrderPaymentTransactionModel = {
    id: string;
    parentId?: string | null;
    orderId: string;
    paymentId: string;
    transactionId: string;
    transactionType: string;
    meta: Record<string, (string | number | boolean | Record<string, any> | null) | null>;
    createdAt: string;
};
