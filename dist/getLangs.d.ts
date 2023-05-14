import { LangKey } from './types';
export declare const getLang: (key: LangKey, vars?: Record<string, string | number>, count?: number) => string;
export declare const getLangDate: (unixtime: number, dateLangKey: LangKey, monthsLangKey: LangKey, relativeFromDay?: number, relativeLangKey?: LangKey) => string;
