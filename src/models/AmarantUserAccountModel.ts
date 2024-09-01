/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantUserAccountGroupModel } from './AmarantUserAccountGroupModel';
export type AmarantUserAccountModel = {
    id: number;
    group?: AmarantUserAccountGroupModel | null;
    username: string;
    email: string;
    status: number;
    failedLoginCount: number;
    timesLocked: number;
    lastLoginIp?: string | null;
    lastLoginTime?: string | null;
    lastFailedLoginIp?: string | null;
    lastFailedLoginTime?: string | null;
    accessScopes: Array<string>;
    authTokenVersion?: string | null;
    createdAt: string;
    updatedAt: string;
};

