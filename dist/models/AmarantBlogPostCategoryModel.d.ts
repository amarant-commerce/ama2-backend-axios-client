export type AmarantBlogPostCategoryModel = {
    id: number;
    url: string;
    path: string;
    createdByUsername: string;
    updatedByUsername: string;
    createdAt: string;
    updatedAt: string;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
};
