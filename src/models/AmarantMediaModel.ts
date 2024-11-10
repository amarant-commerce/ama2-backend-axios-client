/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantImageModel } from './AmarantImageModel';
import type { AmarantMediaFileModel } from './AmarantMediaFileModel';
import type { AmarantMediaVideoModel } from './AmarantMediaVideoModel';
export type AmarantMediaModel = (AmarantImageModel | AmarantMediaVideoModel | AmarantMediaFileModel | {
    type: string;
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
});

