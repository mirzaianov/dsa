function getMaxMovingDistance(budget, weight, cost) {
  return budget / (weight * (cost / 10 / 100));
}

export default getMaxMovingDistance;
