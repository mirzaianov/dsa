function createPubSub() {
  const subscribers = new Map();

  return {
    publish(eventId, eventData) {
      const existingCallbacks = subscribers.get(eventId) ?? [];

      existingCallbacks.forEach((callback) => {
        callback(eventData);
      });
    },
    subscribe(eventId, callback) {
      if (subscribers.has(eventId)) {
        subscribers.set(eventId, [...subscribers.get(eventId), callback]);
      } else {
        subscribers.set(eventId, [callback]);
      }

      const unsubscribe = () => {
        if (subscribers.has(eventId)) {
          const existingCallbacks = subscribers.get(eventId);
          const remainingCallbacks = existingCallbacks.filter((item) => item !== callback);

          subscribers.set(eventId, remainingCallbacks);
        }
      };

      return unsubscribe;
    },
  };
}

export { createPubSub };
