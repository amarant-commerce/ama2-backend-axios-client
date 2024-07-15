import type { AmarantSalesTierRuleItem } from './AmarantSalesTierRuleItem';
export type AmarantSalesTierRule = {
    id: number;
    name: string;
    description?: string | null;
    items: Array<AmarantSalesTierRuleItem>;
    updatedAt: string;
};
