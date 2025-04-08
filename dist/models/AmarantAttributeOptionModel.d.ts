export type AmarantAttributeOptionModel = {
    id: string;
    attributeId: number;
    label: string;
    scopedLabels: Record<string, any>;
    swatchType?: string | null;
    swatch?: string | null;
    position: number;
};
