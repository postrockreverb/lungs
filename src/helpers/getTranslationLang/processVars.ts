import { Lang } from '../../types';

export const processVars = (lang: Lang, vars?: Record<string, string | number>): string => {
  if (!vars) {
    return lang;
  }

  for (const [key, value] of Object.entries(vars)) {
    lang = lang.replaceAll(`{${key}}`, value.toString());
  }

  return lang;
};
