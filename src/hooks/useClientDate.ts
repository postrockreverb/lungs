import { useEffect, useState } from 'react';
import { LangKey } from '../types';
import { useLangs } from '../LangsProvider';

interface UseDateParams {
  unixtime: number | undefined;
  dateLangKey: LangKey;
  monthsLangKey: LangKey;
  relativeFromDay?: number;
  relativeLangKey?: LangKey;
}

export const useClientDate = (props: UseDateParams) => {
  const { unixtime, dateLangKey, monthsLangKey, relativeFromDay, relativeLangKey } = props;
  const { getLangDate } = useLangs();

  const [displayTime, setDisplayTime] = useState<string>('');

  useEffect(() => {
    if (unixtime) {
      const time = getLangDate(unixtime, dateLangKey, monthsLangKey, relativeFromDay, relativeLangKey);
      setDisplayTime(time);
    }
  }, [dateLangKey, monthsLangKey, relativeFromDay, relativeLangKey, unixtime]);

  if (!unixtime) {
    return '';
  }

  return displayTime;
};
