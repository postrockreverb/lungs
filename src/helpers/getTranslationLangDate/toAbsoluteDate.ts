import { DateLangKeyTranslation, MonthKey, MonthLangKeyTranslation } from '../../types';

export const toAbsoluteDate = (
  unixtime: number,
  dateLangKeyTranslation: DateLangKeyTranslation,
  monthsLangKeyTranslation: MonthLangKeyTranslation,
) => {
  const date = new Date(unixtime);

  const day = date.getDate();
  const month = date.getMonth().toString() as MonthKey;
  const year = date.getFullYear();

  let r = dateLangKeyTranslation;
  r = r.replace('{day}', day.toString());
  r = r.replace('{month}', monthsLangKeyTranslation[month]);
  r = r.replace('{year}', year.toString());
  return r;
};
