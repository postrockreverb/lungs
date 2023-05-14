export const langPackUpdateEventName = 'langpackupdate';

const langPackUpdateEvent = new Event(langPackUpdateEventName);

export const collectEvent = () => {
  dispatchEvent(langPackUpdateEvent);
};
