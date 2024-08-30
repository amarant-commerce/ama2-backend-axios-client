import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StoresService {
    /**
     * Get store channel collection.
     * Get store channel collection.
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getChannelCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channels',
            query: {
                'q': q,
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
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getChannelScopeCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-scopes',
            query: {
                'q': q,
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
     * @param q Search criteria query.
     * @param page Page.
     * @param itemsPerPage Items per page.
     * @returns any OK
     * @throws ApiError
     */
    static getChannelDomainCollection(q, page, itemsPerPage) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stores/v1/channel-domains',
            query: {
                'q': q,
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
