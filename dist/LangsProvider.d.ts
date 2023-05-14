import { ReactNode } from 'react';
import { LangPack } from './types';
interface LangProviderProps {
    children: ReactNode;
    hash: string;
    getLangPack: () => LangPack | null;
}
export declare const LangsProvider: (props: LangProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
