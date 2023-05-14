import { ReactNode } from 'react';
interface LangProviderProps {
    children: ReactNode;
    targetHash?: string;
    onNeedLoad?: () => void;
}
export declare const LangsProvider: ({ children, targetHash, onNeedLoad }: LangProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
