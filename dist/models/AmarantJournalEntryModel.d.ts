export type AmarantJournalEntryModel = {
    id: string;
    journalType: string;
    identityType: string;
    identityId?: string | null;
    level: number;
    identifiers: Array<string>;
    createdAt: string;
};
