import { LangPack } from './types';
export declare const setTargetLangPackHash: (hash: string) => void;
export declare const getLangPack: () => LangPack | null;
export declare const setLangPack: (newLangPack: LangPack | null) => void;
export declare const initLangPack: (onNeedLoad?: () => void) => void;
