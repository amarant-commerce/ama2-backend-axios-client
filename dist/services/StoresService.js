import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoresService {
    /**
     * Get store channel collection.
     * Get store channel collection.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getChannelCollection(page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channels',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get store channel item.
     * Get store channel item.
     * @param id Channel ID.
     * @returns AmarantStoreChannelModel OK
     * @throws ApiError
     */
    static getChannelItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channels/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get store channel scope collection.
     * Get store channel scope collection.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getChannelScopeCollection(page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-scopes',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get store channel scope item.
     * Get store channel scope item.
     * @param id Channel scope ID.
     * @returns AmarantStoreChannelScopeModel OK
     * @throws ApiError
     */
    static getChannelScopeItem(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-scopes/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get store channel domain collection.
     * Get store channel domain collection.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getChannelDomainCollection(page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-domains',
            query: {
                'page': page,
                'itemsPerPage': itemsPerPage,
            },
        });
    }
    /**
     * Get store channel domain item.
     * Get store channel domain item.
     * @param id Channel ID.
     * @returns AmarantStoreChannelDomainModel OK
     * @throws ApiError
     */
    static getChannel(id) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-domains/{id}',
            path: {
                'id': id,
            },
        });
    }
}
