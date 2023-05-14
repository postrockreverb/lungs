import { ReactNode, useEffect, useState } from 'react';
import { LangPack } from './types';
import { GetLang, GetLangDate, LangsContext, LangsContextValue } from './LangsContext';
import { getTranslationLang, getTranslationLangDate } from './helpers';
import { getCached, getCachedHash, saveCache } from './helpers/cache';

let isLangPackSet = false;

interface LangProviderProps {
  children: ReactNode;
  hash: string;
  getLangPack: () => LangPack | null;
}

export const LangsProvider = (props: LangProviderProps) => {
  const { children, hash, getLangPack } = props;

  const [langPack, setLangPack] = useState<LangPack | null>(null);

  useEffect(() => {
    if (isLangPackSet) {
      return;
    }

    const cachedHash = getCachedHash();

    let langPack: LangPack | null;
    if (hash === cachedHash) {
      langPack = getLangPack();
    } else {
      langPack = getCached();
    }

    if (langPack) {
      setLangPack(langPack);
      isLangPackSet = true;
    }

    if (langPack && hash !== cachedHash) {
      saveCache(langPack);
    }
  }, [langPack]);

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
