import { createContext, ReactNode, useContext } from 'react';
import { LangKey, LangPack } from './types';
import { getTranslationLang, getTranslationLangDate } from './helpers';

export type GetLang = (key: LangKey, vars?: Record<string, string | number>, count?: number) => string;
export type GetLangDate = (
  unixtime: number,
  dateLangKey: LangKey,
  monthsLangKey: LangKey,
  relativeFromDay?: number,
  relativeLangKey?: LangKey,
) => string;

interface LangsContextValue {
  getLang: GetLang;
  getLangDate: GetLangDate;
}

const LangsContext = createContext<LangsContextValue>({
  getLang: () => '',
  getLangDate: () => '',
});

export const useLangs = () => useContext(LangsContext);

interface LangProviderProps {
  children: ReactNode;
  langPack: LangPack | null;
}

export const LangsProvider = ({ children, langPack }: LangProviderProps) => {
  const getLang: GetLang = (key, vars, count): string => {
    if (!langPack?.commons) {
      return '';
    }

    const translation = langPack.commons[key];
    return getTranslationLang(translation, vars, count);
  };

  const getLangDate: GetLangDate = (unixtime, dateLangKey, monthsLangKey, relativeFromDay, relativeLangKey) => {
    if (!langPack?.commons || !langPack.dates || !langPack?.relativeDates) {
      return '';
    }

    const dateLangKeyTranslation = langPack?.dates?.[dateLangKey];
    const monthsLangKeyTranslation = langPack?.months?.[monthsLangKey];
    const relativeDateLangKeyTranslation = relativeLangKey ? langPack?.relativeDates?.[relativeLangKey] : undefined;

    return getTranslationLangDate(
      unixtime,
      dateLangKeyTranslation,
      monthsLangKeyTranslation,
      relativeFromDay,
      relativeDateLangKeyTranslation,
    );
  };

  const value: LangsContextValue = {
    getLang,
    getLangDate,
  };

  return <LangsContext.Provider value={value}>{children}</LangsContext.Provider>;
};
