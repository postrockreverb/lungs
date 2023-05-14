import { LangPack } from './types';
import { getCached, getCachedHash, saveCache } from './helpers';
import { collectEvent } from './event';

let targetHash: string | null = null;
let langPack: LangPack | null = null;

export const setTargetLangPackHash = (hash: string) => {
  targetHash = hash;
};

export const getLangPack = () => langPack;

export const setLangPack = (newLangPack: LangPack | null) => {
  langPack = newLangPack;
  if (newLangPack) {
    saveCache(newLangPack);
  }
  collectEvent();
};

export const initLangPack = (onNeedLoad?: () => void) => {
  const cachedHash = getCachedHash();
  if (cachedHash === targetHash) {
    const cachedLangPack = getCached();
    setLangPack(cachedLangPack);
    return;
  }

  onNeedLoad?.();
};
