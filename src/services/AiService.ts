/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAiPlaygroundResultDto } from '../models/AmarantAiPlaygroundResultDto';
import type { InputAmarantAiPlaygroundInputDto } from '../models/InputAmarantAiPlaygroundInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static aiPlayground(
        requestBody: InputAmarantAiPlaygroundInputDto,
    ): CancelablePromise<AmarantAiPlaygroundResultDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai/v1/openai/playground/completions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
