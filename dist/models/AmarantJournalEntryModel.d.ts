export type AmarantJournalEntryModel = {
    id: string;
    journalType: string;
    identityType: string;
    identityId?: string | null;
    area: string;
    level: number;
    levelText: string;
    identifiers: Array<string>;
    createdAt: string;
};
