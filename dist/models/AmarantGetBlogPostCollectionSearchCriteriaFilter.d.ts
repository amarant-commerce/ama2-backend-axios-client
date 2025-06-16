export type AmarantGetBlogPostCollectionSearchCriteriaFilter = {
    groups?: Array<Record<string, {
        /**
         * title: like
         * status: in
         * channel_ids: aina
         * category_ids: in
         * tag_ids: in
         * author_id: eq
         * created_by_username: like
         * updated_by_username: like
         */
        condition?: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'lte' | 'gte' | 'null' | 'range' | 'like' | 'tr';
        /**
         * title: string
         * status: array
         * channel_ids: array
         * category_ids: array
         * tag_ids: array
         * author_id: integer, string
         * created_by_username: string
         * updated_by_username: string
         */
        value?: number | number | string | boolean | any[] | null;
    }>>;
    sort?: Array<{
        /**
         * id, title, status, channel_ids, category_ids, tag_ids, author_id, created_at, created_by_username, updated_at, updated_by_username
         */
        path?: string;
        direction?: 'ASC' | 'DESC';
    }>;
};
