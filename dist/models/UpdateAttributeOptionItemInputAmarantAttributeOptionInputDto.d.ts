export type UpdateAttributeOptionItemInputAmarantAttributeOptionInputDto = {
    id: (number | null | string | null);
    attributeId: number;
    label: string;
    scopedLabels: Record<string, any>;
    position: number;
    swatchType?: string | null;
    swatch?: string | null;
};
