/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantCookiePanelItemModel } from './AmarantCookiePanelItemModel';
export type AmarantCookiePanelModel = {
    id: number;
    active: boolean;
    identifier: string;
    scopes: Array<string>;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    items: Array<AmarantCookiePanelItemModel>;
    createdAt: string;
    createdByUsername: string;
    updatedAt: string;
    updatedByUsername: string;
};

