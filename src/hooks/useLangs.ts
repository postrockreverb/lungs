import { useContext } from 'react';
import { LangsContext } from '../LangsContext';

export const useLangs = () => useContext(LangsContext);
