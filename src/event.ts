export const langPackUpdateEventName = 'langpackupdate';

const langPackUpdateEvent = new Event(langPackUpdateEventName);

export const collectEvent = () => {
  if (typeof window === 'undefined') {
    return;
  }

  dispatchEvent(langPackUpdateEvent);
};
