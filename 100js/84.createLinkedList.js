function createLinkedList(initialNumbers) {
  const head = {
    value: 0,
    next: null,
  };
  let curr = head;

  for (let i = 0; i < initialNumbers.length; i += 1) {
    const node = {
      value: initialNumbers[i],
      next: null,
    };

    curr.next = node;
    curr = curr.next;
  }

  return {
    getStart() {
      return head.next;
    },
    push(num) {
      const node = {
        value: num,
        next: null,
      };

      curr.next = node;
      curr = curr.next;
    },
    unshift(num) {
      const node = {
        value: num,
        next: null,
      };
      const temp = head.next;

      head.next = node;
      node.next = temp;
    },
  };
}

export { createLinkedList };
