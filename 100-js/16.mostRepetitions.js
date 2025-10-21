function countLetter(string, target) {
  let count = 0;

  for (const letter of string) {
    if (letter === target) count += 1;
  }

  return count;
}

function mostRepetitions(string1, string2, letter) {
  const count1 = countLetter(string1, letter);
  const count2 = countLetter(string2, letter);

  return count1 >= count2 ? string1 : string2;
}

export default mostRepetitions;
