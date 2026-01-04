function curry(fn: (...args: any[]) => any): (...args: any[]) => any {
  return function curried(this: any, ...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.call(this, ...args);
    }

    return function next(this: any, ...nextArgs: any[]): any {
      return curried.call(this, ...args, ...nextArgs);
    };
  };
}

export default curry;
