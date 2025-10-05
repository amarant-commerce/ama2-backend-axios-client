/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantMediaFileModel = {
    id: number;
    type: 'file';
    url: string;
    position: number;
    featured: boolean;
    altText?: string | null;
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

