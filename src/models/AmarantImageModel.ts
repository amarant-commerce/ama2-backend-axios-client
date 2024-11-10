/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantImageModelVariant } from './AmarantImageModelVariant';
export type AmarantImageModel = {
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
    width: number;
    height: number;
    variants: Array<AmarantImageModelVariant>;
    type: 'image';
    parentType: string;
    parentId: string;
    path: string;
    hash: string;
    storageProvider: string;
    fileSize: string;
    fileExtension: string;
    fileOriginalName: string;
    sourcePath?: string | null;
    sourceProvider?: string | null;
    meta: Record<string, any>;
    tags: Array<string>;
    createdAt: string;
    updatedAt: string;
};

