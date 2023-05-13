import { ReactNode, useEffect, useState } from 'react';
import { LangPack } from './types';
import { GetLang, GetLangDate, LangsContext, LangsContextValue } from './LangsContext';
import { getTranslationLang, getTranslationLangDate } from './helpers';
import { LS_CACHE_KEY } from './constants';

interface LangProviderProps {
  children: ReactNode;
  langPack: LangPack | undefined | null;
  localStorageCache?: boolean;
}

export const LangsProvider = ({ children, langPack: _langPack, localStorageCache = true }: LangProviderProps) => {
  const [langPack, setLangPack] = useState<LangPack | undefined | null>(_langPack);

  useEffect(() => {
    if (_langPack && typeof _langPack === 'object') {
      setLangPack(_langPack);
      if (localStorageCache) {
        localStorage.setItem(LS_CACHE_KEY, JSON.stringify(_langPack));
      }
    }

    if (localStorageCache && !_langPack && !langPack && !!localStorage.getItem(LS_CACHE_KEY)) {
      const json = localStorage.getItem(LS_CACHE_KEY) ?? '';
      const langPackParsed = JSON.parse(json);
      if (langPackParsed && typeof langPackParsed === 'object') {
        setLangPack(langPackParsed);
      }
    }
  }, [_langPack, langPack, localStorageCache]);

  const getLang: GetLang = (key, vars, count): string => {
    const translation = langPack?.commons?.[key];
    return getTranslationLang(translation, vars, count);
  };

  const getLangDate: GetLangDate = (unixtime, dateLangKey, monthsLangKey, relativeFromDay, relativeLangKey): string => {
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
