export type AmarantSalesPricingRule = {
    id: number;
    active: boolean;
    featured: boolean;
    name: string;
    description?: string | null;
    channelIds: Array<number>;
    subject: string;
    priceType: string;
    priority: number;
    validFrom: string;
    validTo?: string | null;
    matchItemsConditions: Array<Record<string, any>>;
    matchContextConditions: Array<Record<string, any>>;
    actions: Array<Record<string, any>>;
    stop: boolean;
    createdAt: string;
    updatedAt: string;
};
