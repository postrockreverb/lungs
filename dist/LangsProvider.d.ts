import { ReactNode } from 'react';
import { LangPack } from './types';
interface LangProviderProps {
    children: ReactNode;
    langPack: LangPack | undefined | null;
}
export declare const LangsProvider: ({ children, langPack }: LangProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
