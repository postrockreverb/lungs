import { useEffect, useState } from 'react';
import { useLangs } from './useLangs';
import { LangKey } from '../types';

interface UseDateParams {
  unixtime: number | undefined;
  dateLangKey: LangKey;
  monthsLangKey: LangKey;
  relativeFromDay?: number;
  relativeLangKey?: LangKey;
}

export const useDate = (props: UseDateParams) => {
  const { unixtime, dateLangKey, monthsLangKey, relativeFromDay, relativeLangKey } = props;

  const { getLangDate } = useLangs();
  const [displayTime, setDisplayTime] = useState<string>('');

  useEffect(() => {
    if (unixtime) {
      const time = getLangDate(unixtime, dateLangKey, monthsLangKey, relativeFromDay, relativeLangKey);
      setDisplayTime(time);
    }
  }, [dateLangKey, getLangDate, monthsLangKey, relativeFromDay, relativeLangKey, unixtime]);

  if (!unixtime) {
    return '';
  }

  return displayTime;
};
