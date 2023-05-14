import { ReactNode, useEffect, useReducer } from 'react';
import { langPackUpdateEventName } from './event';
import { initLangPack, setTargetLangPackHash } from './langPack';

interface LangProviderProps {
  children: ReactNode;
  targetHash?: string;
  onNeedLoad?: () => void;
}

export const LangsProvider = ({ children, targetHash, onNeedLoad }: LangProviderProps) => {
  const [, update] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (targetHash) {
      setTargetLangPackHash(targetHash);
    }

    initLangPack(onNeedLoad);

    window.addEventListener(langPackUpdateEventName, update);
    return () => {
      window.removeEventListener(langPackUpdateEventName, update);
    };
  }, []);

  return <>{children}</>;
};
