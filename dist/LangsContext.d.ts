/// <reference types="react" />
import { LangKey } from './types';
export type GetLang = (key: LangKey, vars?: Record<string, string | number>, count?: number) => string;
export type GetLangDate = (unixtime: number, dateLangKey: LangKey, monthsLangKey: LangKey, relativeFromDay?: number, relativeLangKey?: LangKey) => string;
export interface LangsContextValue {
    getLang: GetLang;
    getLangDate: GetLangDate;
}
export declare const LangsContextDefaultValue: LangsContextValue;
export declare const LangsContext: import("react").Context<LangsContextValue>;
