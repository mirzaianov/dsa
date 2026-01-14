function shuffle(arr: any[]): void {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
}

export default shuffle;
