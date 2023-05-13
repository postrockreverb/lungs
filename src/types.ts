export type Lang = string;
export type LangKey = string;

const numericKeys = ['1', '2', '5'] as const;
export type NumericKey = (typeof numericKeys)[number];
export type NumericLangKeyTranslation = Record<NumericKey, Lang>;

export type LangKeyTranslation = Lang | NumericLangKeyTranslation;

export type DateLangKeyTranslation = Lang;

export const monthKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'] as const;
export type MonthKey = (typeof monthKeys)[number];
export type MonthLangKeyTranslation = Record<MonthKey, Lang>;

const relativeDateKeys = ['just', 'seconds', 'minute', 'minutes', 'hour', 'hours', 'yesterday', 'more'] as const;
export type RelativeDateKey = (typeof relativeDateKeys)[number];
export type RelativeDateLangKeyTranslation = Record<RelativeDateKey, LangKeyTranslation>;

export type LangPack = {
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

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LangPackPartial = DeepPartial<LangPack>;
