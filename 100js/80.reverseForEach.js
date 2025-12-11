function reverseForEach(callback) {
  for (let i = this.length - 1; i >= 0; i -= 1) {
    callback(this[i], i, this);
  }
}

Array.prototype.reverseForEach = reverseForEach;

const numbers = [1, 2, 3, 4, 5];

numbers.reverseForEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});

export { reverseForEach };
