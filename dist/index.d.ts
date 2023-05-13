/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

type Lang = string;
type LangKey = string;
declare const numericKeys: readonly ["1", "2", "5"];
type NumericKey = (typeof numericKeys)[number];
type NumericLangKeyTranslation = Record<NumericKey, Lang>;
type LangKeyTranslation = Lang | NumericLangKeyTranslation;
type DateLangKeyTranslation = Lang;
declare const monthKeys: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
type MonthKey = (typeof monthKeys)[number];
type MonthLangKeyTranslation = Record<MonthKey, Lang>;
declare const relativeDateKeys: readonly ["just", "seconds", "minute", "minutes", "hour", "hours", "yesterday", "more"];
type RelativeDateKey = (typeof relativeDateKeys)[number];
type RelativeDateLangKeyTranslation = Record<RelativeDateKey, LangKeyTranslation>;
type LangPack = {
    commons: {
        [P in LangKey]: LangKeyTranslation;
    };
    months: {
        [P in LangKey]: MonthLangKeyTranslation;
    };
    dates: {
        [P in LangKey]: DateLangKeyTranslation;
    };
    relativeDates: {
        [P in LangKey]: RelativeDateLangKeyTranslation;
    };
};
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
type LangPackPartial = DeepPartial<LangPack>;

interface UseDateParams {
    unixtime: number | undefined;
    dateLangKey: LangKey;
    monthsLangKey: LangKey;
    relativeFromDay?: number;
    relativeLangKey?: LangKey;
}
declare const useDate: (props: UseDateParams) => string;

type GetLang = (key: LangKey, vars?: Record<string, string | number>, count?: number) => string;
type GetLangDate = (unixtime: number, dateLangKey: LangKey, monthsLangKey: LangKey, relativeFromDay?: number, relativeLangKey?: LangKey) => string;
interface LangsContextValue {
    getLang: GetLang;
    getLangDate: GetLangDate;
}

declare const useLangs: () => LangsContextValue;

interface LangProviderProps {
    children: ReactNode;
    langPack: LangPack | undefined | null;
    localStorageCache?: boolean;
}
declare const LangsProvider: ({ children, langPack: _langPack, localStorageCache }: LangProviderProps) => react_jsx_runtime.JSX.Element;

export { DateLangKeyTranslation, Lang, LangKey, LangKeyTranslation, LangPack, LangPackPartial, LangsProvider, MonthKey, MonthLangKeyTranslation, NumericKey, NumericLangKeyTranslation, RelativeDateKey, RelativeDateLangKeyTranslation, monthKeys, useDate, useLangs };
