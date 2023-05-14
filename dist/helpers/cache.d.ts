import { LangPack } from '../types';
export declare const saveCache: (langPack: LangPack) => void;
export declare const getCachedHash: () => string | null;
export declare const getCached: () => LangPack | null;
