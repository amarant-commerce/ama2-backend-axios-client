import type { AmarantApiPaginatedCollectionResponse } from '../models/AmarantApiPaginatedCollectionResponse';
import type { AmarantGetChannelCollectionSearchCriteriaFilter } from '../models/AmarantGetChannelCollectionSearchCriteriaFilter';
import type { AmarantGetChannelDomainCollectionSearchCriteriaFilter } from '../models/AmarantGetChannelDomainCollectionSearchCriteriaFilter';
import type { AmarantGetChannelScopeCollectionSearchCriteriaFilter } from '../models/AmarantGetChannelScopeCollectionSearchCriteriaFilter';
import type { AmarantStoreChannelDomainModel } from '../models/AmarantStoreChannelDomainModel';
import type { AmarantStoreChannelModel } from '../models/AmarantStoreChannelModel';
import type { AmarantStoreChannelScopeModel } from '../models/AmarantStoreChannelScopeModel';
import type { UpdateChannelDomainStateInputAmarantStoreChannelDomainStateInputDto } from '../models/UpdateChannelDomainStateInputAmarantStoreChannelDomainStateInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class StoresService {
    /**
     * Get store channel collection.
     * Get store channel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getChannelCollection(q?: AmarantGetChannelCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantStoreChannelModel>;
    })>;
    /**
     * Get store channel item.
     * Get store channel item.
     * @param id Channel ID.
     * @returns AmarantStoreChannelModel OK
     * @throws ApiError
     */
    static getChannelItem(id: number): CancelablePromise<AmarantStoreChannelModel>;
    /**
     * Get store channel scope collection.
     * Get store channel scope collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getChannelScopeCollection(q?: AmarantGetChannelScopeCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantStoreChannelScopeModel>;
    })>;
    /**
     * Get store channel scope item.
     * Get store channel scope item.
     * @param id Channel scope ID.
     * @returns AmarantStoreChannelScopeModel OK
     * @throws ApiError
     */
    static getChannelScopeItem(id: number): CancelablePromise<AmarantStoreChannelScopeModel>;
    /**
     * Get store channel domain collection.
     * Get store channel domain collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @param include Include fields (comma separated).
     * @param exclude Exclude fields (comma separated).
     * @returns any OK
     * @throws ApiError
     */
    static getChannelDomainCollection(q?: AmarantGetChannelDomainCollectionSearchCriteriaFilter, page?: number, itemsPerPage?: number, include?: string, exclude?: string): CancelablePromise<(AmarantApiPaginatedCollectionResponse & {
        data: Array<AmarantStoreChannelDomainModel>;
    })>;
    /**
     * Get store channel domain item.
     * Get store channel domain item.
     * @param id Channel ID.
     * @returns AmarantStoreChannelDomainModel OK
     * @throws ApiError
     */
    static getChannel(id: number): CancelablePromise<AmarantStoreChannelDomainModel>;
    /**
     * Delete store channel domain.
     * Delete store channel domain.
     *
     * Required access scopes:
     * * write_channels
     * @param id Channel ID.
     * @returns AmarantStoreChannelDomainModel Resource deleted.
     * @throws ApiError
     */
    static deleteChannelDomain(id: number): CancelablePromise<AmarantStoreChannelDomainModel>;
    /**
     * Update store channel domain state.
     * Update store channel domain state.
     *
     * Required access scopes:
     * * write_channels
     * @param id Channel ID.
     * @param requestBody
     * @returns AmarantStoreChannelDomainModel Resource updated.
     * @throws ApiError
     */
    static updateChannelDomainState(id: number, requestBody: UpdateChannelDomainStateInputAmarantStoreChannelDomainStateInputDto): CancelablePromise<AmarantStoreChannelDomainModel>;
}
