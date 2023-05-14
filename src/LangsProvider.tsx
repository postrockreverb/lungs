import { ReactNode, useCallback, useEffect, useReducer } from 'react';
import { GetLang, GetLangDate, LangsContext, LangsContextValue } from './LangsContext';
import { getTranslationLang, getTranslationLangDate } from './helpers';
import { getLangPack } from './langPack';
import { langPackUpdateEventName } from './event';

interface LangProviderProps {
  children: ReactNode;
}

export const LangsProvider = ({ children }: LangProviderProps) => {
  const [, update] = useReducer((x) => x + 1, 0);
  const langPack = getLangPack();

  useEffect(() => {
    window.addEventListener(langPackUpdateEventName, update);
    return () => {
      window.removeEventListener(langPackUpdateEventName, update);
    };
  }, []);

  const getLang: GetLang = useCallback(
    (key, vars, count): string => {
      const translation = langPack?.commons?.[key];
      return getTranslationLang(translation, vars, count);
    },
    [langPack?.commons],
  );

  const getLangDate: GetLangDate = useCallback(
    (unixtime, dateLangKey, monthsLangKey, relativeFromDay, relativeLangKey): string => {
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
    },
    [langPack?.dates, langPack?.months, langPack?.relativeDates],
  );

  const value: LangsContextValue = {
    getLang,
    getLangDate,
  };

  return <LangsContext.Provider value={value}>{children}</LangsContext.Provider>;
};
