function moveItems(numbers, moveInstructions) {
  const res = [...numbers];

  for (const { fromIndex, toIndex } of moveInstructions) {
    const item = res.splice(fromIndex, 1)[0];

    res.splice(toIndex, 0, item);
  }

  return res;
}

export default moveItems;
