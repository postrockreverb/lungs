import { LangPack } from './types';
import { getCached, getCachedHash, saveCache } from './helpers';
import { collectEvent } from './event';

let langPack: LangPack | null = null;

export const getLangPack = () => langPack;
export const getLangPackHash = () => langPack?.hash;
export const getLangPackLoc = () => langPack?.lang;

export const setLangPack = (newLangPack: LangPack | null) => {
  langPack = newLangPack;
  collectEvent();
};

export const initLangPack = () => {
  const hash = getLangPackHash();
  const cachedHash = getCachedHash();

  if (hash !== cachedHash) {
    return;
  }
  const newLangPack = getCached();

  if (newLangPack) {
    setLangPack(newLangPack);
    saveCache(newLangPack);
  }
};
