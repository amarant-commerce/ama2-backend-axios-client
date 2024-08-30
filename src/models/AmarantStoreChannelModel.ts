/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantStoreChannelDomainModel } from './AmarantStoreChannelDomainModel';
import type { AmarantStoreChannelScopeModel } from './AmarantStoreChannelScopeModel';
export type AmarantStoreChannelModel = {
    id: number;
    code: string;
    name: string;
    scopes: Array<AmarantStoreChannelScopeModel>;
    domains: Array<AmarantStoreChannelDomainModel>;
    createdAt: string;
    updatedAt: string;
};

