function createObservable() {
  const observers = [];

  return {
    subscribe(callback) {
      const isSubscribed = observers.includes(callback);

      if (!isSubscribed) observers.push(callback);
    },

    unsubscribe(callback) {
      const indexOf = observers.indexOf(callback);

      if (indexOf !== -1) observers.splice(indexOf, 1);
    },

    notify(eventData) {
      observers.forEach((callback) => callback(eventData));
    },
  };
}

export { createObservable };
