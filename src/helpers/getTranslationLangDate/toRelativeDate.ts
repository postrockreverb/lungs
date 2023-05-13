import { DAY, HOUR, MINUTE } from '../../constants';
import { RelativeDateLangKeyTranslation } from '../../types';
import { getTranslationLang } from '../getTranslationLang';

export const toRelativeDate = (unixtime: number, relativeDateLangKeyTranslation: RelativeDateLangKeyTranslation) => {
  const translation = relativeDateLangKeyTranslation;
  const delta = Math.round((+new Date() - unixtime) / 1000);

  if (delta < 30) {
    return getTranslationLang(translation['just']);
  }

  if (delta < MINUTE) {
    return getTranslationLang(translation['seconds'], { n: delta }, delta);
  }

  if (delta < 2 * MINUTE) {
    return getTranslationLang(translation['minute']);
  }

  if (delta < HOUR) {
    const minutes = Math.floor(delta / MINUTE);
    return getTranslationLang(translation['minutes'], { n: minutes }, minutes);
  }

  if (Math.floor(delta / HOUR) === 1) {
    return getTranslationLang(translation['hour']);
  }

  if (delta < DAY) {
    const hours = Math.floor(delta / HOUR);
    return getTranslationLang(translation['hours'], { n: hours }, hours);
  }

  if (delta < DAY * 2) {
    return getTranslationLang(translation['yesterday']);
  }

  const days = Math.floor(delta / DAY);
  return getTranslationLang(translation['more'], { n: days }, days);
};
