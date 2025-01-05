/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantProductBackendOutputProductSourceItemOutput } from './AmarantProductBackendOutputProductSourceItemOutput';
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
    aggregatedQty: string;
    sourceItems: Array<AmarantProductBackendOutputProductSourceItemOutput>;
    createdAt: string;
    updatedAt: string;
};

