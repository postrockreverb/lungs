import { ReactNode } from 'react';
import { LangKey, LangPack } from './types';
export type GetLang = (key: LangKey, vars?: Record<string, string | number>, count?: number) => string;
export type GetLangDate = (unixtime: number, dateLangKey: LangKey, monthsLangKey: LangKey, relativeFromDay?: number, relativeLangKey?: LangKey) => string;
interface LangsContextValue {
    getLang: GetLang;
    getLangDate: GetLangDate;
}
export declare const useLangs: () => LangsContextValue;
interface LangProviderProps {
    children: ReactNode;
    langPack: LangPack | null;
}
export declare const LangsProvider: ({ children, langPack }: LangProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
