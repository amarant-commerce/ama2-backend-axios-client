export type AmarantProductWishlistProduct = {
    id: string;
    productId: number;
    sku: string;
    productName: string;
    channelId: number;
    channelName: string;
    parentProductId?: number | null;
    parentSku?: string | null;
    parentProductName?: string | null;
    configurationId?: string | null;
    addedAt: string;
};
