import { processVars } from './processVars';
import { LangKeyTranslation, NumericKey } from '../../types';

export const getTranslationLang = (translation: LangKeyTranslation, vars?: Record<string, string | number>, count?: number): string => {
  if (typeof translation !== 'object') {
    return processVars(translation, vars);
  }

  if (!count) {
    return processVars(translation['5'], vars);
  }

  let translationKey: NumericKey = '1';
  const isTenth = Math.floor(count / 10) % 10 === 1;

  if (!isTenth && [2, 3, 4].includes(count % 10)) {
    translationKey = '2';
  }

  if (isTenth || [5, 6, 7, 8, 9, 0].includes(count % 10)) {
    translationKey = '5';
  }

  let lang = translation[translationKey];

  if (vars) {
    for (const [key, value] of Object.entries(vars)) {
      lang = lang.replaceAll(`{${key}}`, value.toString());
    }
  }

  return processVars(lang, vars);
};
