import { createContext } from 'react';
import { LangKey } from './types';

export type GetLang = (key: LangKey, vars?: Record<string, string | number>, count?: number) => string;
export type GetLangDate = (
  unixtime: number,
  dateLangKey: LangKey,
  monthsLangKey: LangKey,
  relativeFromDay?: number,
  relativeLangKey?: LangKey,
) => string;

export interface LangsContextValue {
  getLang: GetLang;
  getLangDate: GetLangDate;
}

export const LangsContextDefaultValue: LangsContextValue = {
  getLang: () => '',
  getLangDate: () => '',
};

export const LangsContext = createContext<LangsContextValue>(LangsContextDefaultValue);
