import { isServerSide } from './helpers';

export const langPackUpdateEventName = 'langpackupdate';

const langPackUpdateEvent = new Event(langPackUpdateEventName);

export const collectEvent = () => {
  if (isServerSide()) {
    return;
  }

  dispatchEvent(langPackUpdateEvent);
};
