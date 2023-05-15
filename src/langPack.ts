import { LangPack } from './types';
import { collectEvent } from './event';

let langPack: LangPack | null = null;

export const getLangPack = () => langPack;

export const setLangPack = (newLangPack: LangPack | null) => {
  langPack = newLangPack;
  collectEvent();
};
