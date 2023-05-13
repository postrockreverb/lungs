import { DAY } from '../../constants';
import { DateLangKeyTranslation, MonthLangKeyTranslation, RelativeDateLangKeyTranslation } from '../../types';
import { toRelativeDate } from './toRelativeDate';
import { toAbsoluteDate } from './toAbsoluteDate';

export const getTranslationLangDate = (
  unixtime: number,
  dateLangKeyTranslation: DateLangKeyTranslation,
  monthsLangKeyTranslation: MonthLangKeyTranslation,
  relativeDateFromDay?: number,
  relativeDateLangKeyTranslation?: RelativeDateLangKeyTranslation,
) => {
  const delta = Math.round((+new Date() - unixtime) / 1000);
  if (relativeDateLangKeyTranslation && relativeDateFromDay && delta < DAY * relativeDateFromDay) {
    return toRelativeDate(unixtime, relativeDateLangKeyTranslation);
  }
  return toAbsoluteDate(unixtime, dateLangKeyTranslation, monthsLangKeyTranslation);
};
