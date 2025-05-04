import type { AmarantApiCollectionResponse } from '../models/AmarantApiCollectionResponse';
import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetProductCollectionSearchCriteriaFilter } from '../models/AmarantGetProductCollectionSearchCriteriaFilter';
import type { AmarantProductBackendOutputProductOutput } from '../models/AmarantProductBackendOutputProductOutput';
import type { AmarantProductCompatibleProductAttributesOutput } from '../models/AmarantProductCompatibleProductAttributesOutput';
import type { AmarantProductCsvSyncOutputDto } from '../models/AmarantProductCsvSyncOutputDto';
import type { AmarantProductWishlist } from '../models/AmarantProductWishlist';
import type { BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto } from '../models/BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto';
import type { GetConfigurableProductCompatibleAttributesInputAmarantProductGetCompatibleAttributesForConfigurableInputDto } from '../models/GetConfigurableProductCompatibleAttributesInputAmarantProductGetCompatibleAttributesForConfigurableInputDto';
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
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static bulkDeleteProductItems(requestBody: BulkDeleteProductItemsInputAmarantProductBulkDeleteInputDto): CancelablePromise<void>;
    /**
     * Sync product data from CSV.
     * Sync product data from CSV.
     *
     * Required access scopes:
     * * write_products
     * * write_categories
     * @param formData
     * @returns AmarantProductCsvSyncOutputDto Accepted
     * @throws ApiError
     */
    static syncProductCsv(formData: SyncProductCsvInputAmarantProductCsvSyncInputDto): CancelablePromise<AmarantProductCsvSyncOutputDto>;
    /**
     * Get compatible configurable product attributes for given child SKUs.
     * Get compatible configurable product attributes for given child SKUs.
     *
     * Required access scopes:
     * * read_products
     * @param requestBody
     * @returns AmarantProductCompatibleProductAttributesOutput OK
     * @throws ApiError
     */
    static getConfigurableProductCompatibleAttributes(requestBody: GetConfigurableProductCompatibleAttributesInputAmarantProductGetCompatibleAttributesForConfigurableInputDto): CancelablePromise<AmarantProductCompatibleProductAttributesOutput>;
    /**
     * Get product wishlist collection.
     * Get product wishlist collection.
     * @returns any OK
     * @throws ApiError
     */
    static getProductWishlistCollection(): CancelablePromise<(AmarantApiCollectionResponse & {
        data: Array<AmarantProductWishlist>;
    })>;
}
