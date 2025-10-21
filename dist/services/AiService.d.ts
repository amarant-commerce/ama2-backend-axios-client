import type { AmarantAiPlaygroundResultDto } from '../models/AmarantAiPlaygroundResultDto';
import type { InputAmarantAiPlaygroundInputDto } from '../models/InputAmarantAiPlaygroundInputDto';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AiService {
    /**
     * Do a completion request.
     * Do a completion request.
     * @param requestBody
     * @returns AmarantAiPlaygroundResultDto OK
     * @throws ApiError
     */
    static aiPlayground(requestBody: InputAmarantAiPlaygroundInputDto): CancelablePromise<AmarantAiPlaygroundResultDto>;
}
