/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AmarantAttributeOptionDataInputDto = {
    attributeId: number;
    label: string;
    scopedLabels: Record<string, any>;
    position: number;
    swatchType?: AmarantAttributeOptionDataInputDto.swatchType | null;
    swatch?: string | null;
    linkedOptionId?: (number | null | string | null) | null;
};
export namespace AmarantAttributeOptionDataInputDto {
    export enum swatchType {
        COLOR = 'color',
        MEDIA = 'media',
    }
}

