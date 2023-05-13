import { LangKey } from '../types';
interface UseDateParams {
    unixtime: number | undefined;
    dateLangKey: LangKey;
    monthsLangKey: LangKey;
    relativeFromDay?: number;
    relativeLangKey?: LangKey;
}
export declare const useDate: (props: UseDateParams) => string;
export {};
