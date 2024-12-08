/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AmarantAnalyticsCookiePanelItemModel } from './AmarantAnalyticsCookiePanelItemModel';
export type AmarantAnalyticsCookiePanelModel = {
    id: number;
    active: boolean;
    identifier: string;
    scopes: Array<string>;
    attributes: Record<string, string | number | number | boolean | any[] | null>;
    items: Array<AmarantAnalyticsCookiePanelItemModel>;
    createdAt: string;
    createdByUsername: string;
    updatedAt: string;
    updatedByUsername: string;
};

