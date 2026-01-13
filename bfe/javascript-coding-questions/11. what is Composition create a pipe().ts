type Func = (arg: any) => any;

function pipe(funcs: Func[]): Func {
  return function fn(this: any, arg) {
    return funcs.reduce((res, func) => func.call(this, res), arg);
  };
}

export default pipe;
