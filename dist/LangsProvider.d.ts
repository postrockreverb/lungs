import { ReactNode } from 'react';
import { LangPack } from './types';
interface LangProviderProps {
    children: ReactNode;
    langPack: LangPack | undefined | null;
    localStorageCache?: boolean;
    onNeedLoad?: () => void;
}
export declare const LangsProvider: ({ children, langPack: _langPack, localStorageCache, onNeedLoad }: LangProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
