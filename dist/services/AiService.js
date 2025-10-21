import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AiService {
    /**
     * Do a completion request.
     * Do a completion request.
     * @param requestBody
     * @returns AmarantAiPlaygroundResultDto OK
     * @throws ApiError
     */
    static aiPlayground(requestBody) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/v1/openai/playground/completions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
