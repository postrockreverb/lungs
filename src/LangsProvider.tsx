import { ReactNode } from 'react';
import { LangPack } from './types';
import { GetLang, GetLangDate, LangsContextValue, LangsContext } from './LangsContext';
import { getTranslationLang, getTranslationLangDate } from './helpers';

interface LangProviderProps {
  children: ReactNode;
  langPack: LangPack;
}

export const LangsProvider = ({ children, langPack }: LangProviderProps) => {
  const getLang: GetLang = (key, vars, count) => {
    const translation = langPack?.commons?.[key];
    return getTranslationLang(translation, vars, count);
  };

  const getLangDate: GetLangDate = (unixtime, dateLangKey, monthsLangKey, relativeFromDay, relativeLangKey) => {
    const dateLangKeyTranslation = langPack?.dates?.[dateLangKey] ?? '';
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
