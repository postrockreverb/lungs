import { LangKey } from '../types';
interface UseDateParams {
    unixtime: number | undefined;
    dateLangKey: LangKey;
    monthsLangKey: LangKey;
    relativeFromDay?: number;
    relativeLangKey?: LangKey;
}
export declare const useClientDate: (props: UseDateParams) => string;
export {};
