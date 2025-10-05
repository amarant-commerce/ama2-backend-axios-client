import type { AmarantCmsBannerItemModel } from './AmarantCmsBannerItemModel';
export type AmarantCmsBannerModel = {
    id: number;
    active: boolean;
    identifier: string;
    autoplay: boolean;
    autoplayDelay: number;
    navigation: boolean;
    pagination: boolean;
    scopes: Array<string>;
    items: Array<AmarantCmsBannerItemModel>;
    createdAt: string;
    createdByUsername: string;
    updatedAt: string;
    updatedByUsername: string;
};
