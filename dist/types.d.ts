export type Lang = string;
export type LangKey = string;
declare const numericKeys: readonly ["1", "2", "5"];
export type NumericKey = (typeof numericKeys)[number];
export type NumericLangKeyTranslation = Record<NumericKey, Lang>;
export type LangKeyTranslation = Lang | NumericLangKeyTranslation;
export type DateLangKeyTranslation = Lang;
export declare const monthKeys: readonly ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
export type MonthKey = (typeof monthKeys)[number];
export type MonthLangKeyTranslation = Record<MonthKey, Lang>;
declare const relativeDateKeys: readonly ["just", "seconds", "minute", "minutes", "hour", "hours", "yesterday", "more"];
export type RelativeDateKey = (typeof relativeDateKeys)[number];
export type RelativeDateLangKeyTranslation = Record<RelativeDateKey, LangKeyTranslation>;
export type LangPack = {
    lang: string;
    hash: string;
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
export {};
