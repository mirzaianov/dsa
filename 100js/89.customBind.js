function customBind(newThis, params) {
  const bindedFn = () => {
    return this.apply(newThis, params);
  };

  return bindedFn;
}

export { customBind };
