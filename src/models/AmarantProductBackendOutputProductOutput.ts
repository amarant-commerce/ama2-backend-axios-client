/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantProductBackendOutputProductOutput = {
    id: number;
    type: string;
    sku: string;
    masterSku?: string | null;
    attributeSetId: number;
    attributeSetName: string;
    channels: Array<string>;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    imageUrl?: string | null;
    mediaCount: number;
    categoryIds: Array<number>;
    categoryPaths: Array<string>;
    qty: string;
    inStock: boolean;
    createdAt: string;
    updatedAt: string;
};

