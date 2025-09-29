export type AmarantSalesPricingRuleCoupon = {
    id: number;
    pricingRuleId: number;
    couponCode: string;
    usageLimit?: number | null;
    usageCount: number;
    createdAt: string;
    updatedAt: string;
};
