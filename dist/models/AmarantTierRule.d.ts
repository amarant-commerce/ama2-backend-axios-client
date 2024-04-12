import type { AmarantTierRuleItem } from './AmarantTierRuleItem';
export type AmarantTierRule = {
    id: number;
    name: string;
    description?: string | null;
    items: Array<AmarantTierRuleItem>;
    updatedAt: string;
};
