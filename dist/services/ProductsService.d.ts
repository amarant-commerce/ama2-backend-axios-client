import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetProductCollectionSearchCriteriaFilter } from '../models/AmarantGetProductCollectionSearchCriteriaFilter';
import type { AmarantProductBackendOutputProductOutput } from '../models/AmarantProductBackendOutputProductOutput';
import type { BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto } from '../models/BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto';
import type { SyncProductCsvInputAmarantProductCsvSyncInputDto } from '../models/SyncProductCsvInputAmarantProductCsvSyncInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ProductsService {
    /**
     * Get product collection.
     * Get product collection.
     *
     * Required access scopes:
     * * read_products
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getProductCollection(q?: AmarantGetProductCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantProductBackendOutputProductOutput>;
    })>;
    /**
     * Get product item.
     * Get product item.
     *
     * Required access scopes:
     * * read_products
     * @param id Product ID
     * @returns AmarantProductBackendOutputProductOutput OK
     * @throws ApiError
     */
    static getProductItem(id: number): CancelablePromise<AmarantProductBackendOutputProductOutput>;
    /**
     * Bulk delete product items.
     * Bulk delete product items.
     *
     * Required access scopes:
     * * write_products
     * * read_products
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static bulkDeleteProductItems(requestBody?: BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto): CancelablePromise<void>;
    /**
     * Sync product data from CSV.
     * Sync product data from CSV.
     *
     * Required access scopes:
     * * write_products
     * * write_categories
     * * read_products
     * @param formData
     * @returns void
     * @throws ApiError
     */
    static syncProductCsv(formData?: SyncProductCsvInputAmarantProductCsvSyncInputDto): CancelablePromise<void>;
}
