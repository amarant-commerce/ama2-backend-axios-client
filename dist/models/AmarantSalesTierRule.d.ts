import type { AmarantSalesTierRuleItem } from './AmarantSalesTierRuleItem';
export type AmarantSalesTierRule = {
    id: number;
    name: string;
    description?: string | null;
    priceType: string;
    items: Array<AmarantSalesTierRuleItem>;
    updatedAt: string;
};
