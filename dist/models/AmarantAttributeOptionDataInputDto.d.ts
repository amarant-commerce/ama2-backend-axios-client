export type AmarantAttributeOptionDataInputDto = {
    attributeId: number;
    label: string;
    scopedLabels: Record<string, any>;
    position: number;
    swatchType?: AmarantAttributeOptionDataInputDto.swatchType | null;
    swatch?: string | null;
    linkedOptionId?: (number | null | string | null) | null;
};
export declare namespace AmarantAttributeOptionDataInputDto {
    enum swatchType {
        COLOR = "color",
        MEDIA = "media"
    }
}
