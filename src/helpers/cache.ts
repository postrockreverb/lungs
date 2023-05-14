import { LangPack } from '../types';

const LS_CACHE_KEY = 'yermak-langs-cache';
const HASH_LENGTH = 32;

const clearCache = () => {
  localStorage.removeItem(LS_CACHE_KEY);
};

export const saveCache = (langPack: LangPack) => {
  const langPackString = JSON.stringify(langPack);
  const localStorageValue = langPack.hash + langPackString;
  localStorage.setItem(LS_CACHE_KEY, localStorageValue);
};

export const getCachedHash = () => {
  const localStorageValue = localStorage.getItem(LS_CACHE_KEY) ?? '';
  const hash = localStorageValue.slice(0, HASH_LENGTH);
  if (hash.length !== HASH_LENGTH) {
    clearCache();
    return null;
  }
  return hash;
};

export const getCached = () => {
  const localStorageValue = localStorage.getItem(LS_CACHE_KEY) ?? '';
  const langPackString = localStorageValue.slice(HASH_LENGTH);

  const langPack = JSON.parse(langPackString);
  if (typeof langPack !== 'object') {
    clearCache();
    return null;
  }

  return langPack as LangPack;
};
