import { DAY } from '../../constants';
import { DateLangKeyTranslation, MonthLangKeyTranslation, RelativeDateLangKeyTranslation } from '../../types';
import { toRelativeDate } from './toRelativeDate';
import { toAbsoluteDate } from './toAbsoluteDate';

export const getTranslationLangDate = (
  unixtime: number,
  dateLangKeyTranslation: DateLangKeyTranslation | undefined,
  monthsLangKeyTranslation: MonthLangKeyTranslation | undefined,
  relativeDateFromDay?: number,
  relativeDateLangKeyTranslation?: RelativeDateLangKeyTranslation | undefined,
) => {
  const delta = Math.round((+new Date() - unixtime) / 1000);
  if (relativeDateFromDay && delta < DAY * relativeDateFromDay) {
    if (!relativeDateLangKeyTranslation) {
      return '';
    }
    return toRelativeDate(unixtime, relativeDateLangKeyTranslation);
  }
  if (!dateLangKeyTranslation || !monthsLangKeyTranslation) {
    return '';
  }
  return toAbsoluteDate(unixtime, dateLangKeyTranslation, monthsLangKeyTranslation);
};
