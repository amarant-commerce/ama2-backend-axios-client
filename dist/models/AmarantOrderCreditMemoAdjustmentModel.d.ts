export type AmarantOrderCreditMemoAdjustmentModel = {
    id: string;
    type: string;
    description?: string | null;
    baseAmount: number;
    amount: number;
    neutral: boolean;
    mutable: boolean;
    taxable: boolean;
    code: string;
};
