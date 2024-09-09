import type { AmarantUserAccountGroupModel } from './AmarantUserAccountGroupModel';
export type AmarantUserAccountModel = {
    id: number;
    group?: AmarantUserAccountGroupModel | null;
    username: string;
    email: string;
    status: number;
    statusText: string;
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
