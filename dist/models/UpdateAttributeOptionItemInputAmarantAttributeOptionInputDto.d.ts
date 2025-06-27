import type { AmarantAttributeOptionDataInputDto } from './AmarantAttributeOptionDataInputDto';
export type UpdateAttributeOptionItemInputAmarantAttributeOptionInputDto = {
    data: AmarantAttributeOptionDataInputDto;
    /**
     * Media file (swatch image).
     */
    media?: Blob | null;
    /**
     * Remove swatch media.
     */
    removeMedia?: boolean | null;
};
