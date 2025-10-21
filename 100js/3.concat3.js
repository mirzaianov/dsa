function concat3(...args) {
  const strings = args.slice(0, args.length - 1);
  const sep = args.at(-1);

  return strings.join(sep);
}

export default concat3;
