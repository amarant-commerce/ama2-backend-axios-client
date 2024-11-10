export type AmarantCmsTemplateModel = {
    id: number;
    type: string;
    templateType: string;
    identifier: string;
    label: string;
    title?: string | null;
    content: string;
    area: string;
    arguments: Record<string, (string | number | boolean | Record<string, any> | null)>;
    meta: Record<string, (string | number | boolean | Record<string, any> | null)>;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
};
