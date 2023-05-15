import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { langPackUpdateEventName } from './event';
import { LangKey } from './types';
import { getLang, getLangDate } from './getLangs';

export type GetLang = (key: LangKey, vars?: Record<string, string | number>, count?: number) => string;
export type GetLangDate = (
  unixtime: number,
  dateLangKey: LangKey,
  monthsLangKey: LangKey,
  relativeFromDay?: number,
  relativeLangKey?: LangKey,
) => string;

interface LangsContextValue {
  getLang: GetLang;
  getLangDate: GetLangDate;
}

const LangsContext = createContext<LangsContextValue>({
  getLang: () => '',
  getLangDate: () => '',
});

export const useLangs = () => useContext(LangsContext);

interface LangProviderProps {
  children: ReactNode;
}

export const LangsProvider = ({ children }: LangProviderProps) => {
  const [, update] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    window.addEventListener(langPackUpdateEventName, update);
    return () => {
      window.removeEventListener(langPackUpdateEventName, update);
    };
  }, []);

  const value: LangsContextValue = {
    getLang,
    getLangDate,
  };

  return <LangsContext.Provider value={value}>{children}</LangsContext.Provider>;
};
