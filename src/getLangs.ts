import { getTranslationLang, getTranslationLangDate } from './helpers';
import { getLangPack } from './langPack';
import { LangKey } from './types';

export const getLang = (key: LangKey, vars?: Record<string, string | number>, count?: number): string => {
  const langPack = getLangPack();
  if (!langPack?.commons) {
    return '';
  }

  const translation = langPack.commons[key];
  return getTranslationLang(translation, vars, count);
};

export const getLangDate = (
  unixtime: number,
  dateLangKey: LangKey,
  monthsLangKey: LangKey,
  relativeFromDay?: number,
  relativeLangKey?: LangKey,
): string => {
  const langPack = getLangPack();
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
