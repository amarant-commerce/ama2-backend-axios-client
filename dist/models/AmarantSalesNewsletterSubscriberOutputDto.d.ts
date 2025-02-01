export type AmarantSalesNewsletterSubscriberOutputDto = {
    id: string;
    channelId: number;
    subjectType: string;
    email: string;
    status: string;
    customerId?: string | null;
    meta: Record<string, any>;
};
