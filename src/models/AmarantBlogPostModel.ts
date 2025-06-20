/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantBlogPostAuthorModel } from './AmarantBlogPostAuthorModel';
import type { AmarantBlogPostCategoryModel } from './AmarantBlogPostCategoryModel';
import type { AmarantBlogPostTagModel } from './AmarantBlogPostTagModel';
import type { AmarantBlogPostVersionModel } from './AmarantBlogPostVersionModel';
export type AmarantBlogPostModel = {
    id: number;
    status: string;
    channelIds: Array<number>;
    channels: Array<string>;
    categoryIds: Array<number>;
    categories: Array<AmarantBlogPostCategoryModel>;
    tags: Array<AmarantBlogPostTagModel>;
    author?: AmarantBlogPostAuthorModel | null;
    url: string;
    path: string;
    content?: AmarantBlogPostVersionModel | null;
    createdByUsername: string;
    updatedByUsername: string;
    createdAt: string;
    updatedAt: string;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
};

