export type AmarantUserAccountApiKeyModel = {
    id: number;
    name: string;
    userAccountId: number;
    username: string;
    active: boolean;
    lastUsedIp?: string | null;
    lastUsedTime?: string | null;
    accessScopes: Array<string>;
    createdAt: string;
    updatedAt: string;
};
