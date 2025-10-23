const stringSequence = (target: string): string[] => {
  if (!target.length) return [];

  const res: string[] = ['a'];
  const store: string[] = ['a'];
  let i = 0;

  while (store.length !== target.length || store[i] !== target[i]) {
    if (store[i] === target[i]) {
      store.push('a');
      i += 1;
    } else {
      const l: string | undefined = store.pop();

      if (l !== undefined) {
        store.push(String.fromCharCode(l.charCodeAt(0) + 1));
      }
    }

    const curr: string = store.join('');

    res.push(curr);
  }

  return res;
};

export default stringSequence;
