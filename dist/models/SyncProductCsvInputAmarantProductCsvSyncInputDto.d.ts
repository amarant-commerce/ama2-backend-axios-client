export type SyncProductCsvInputAmarantProductCsvSyncInputDto = {
    /**
     * Configuration in JSON format
     */
    configuration: string;
    /**
     * Gzip compressed CSV file
     */
    file: Blob;
};
