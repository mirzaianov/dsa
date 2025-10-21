function averageOf4Numbers(...args) {
  const len = args.length;
  const sum = args.reduce((acc, item) => acc + item, 0);

  return sum / len;
}

export default averageOf4Numbers;
