export type AmarantCrmClientModel = {
    id: number;
    customerId?: string | null;
    organizationId?: string | null;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    createdAt: string;
    createdByUsername: string;
    updatedAt: string;
    updatedByUsername: string;
};
