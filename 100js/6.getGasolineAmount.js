function getGasolineAmount(distance, consumptionPer100Km) {
  return 2 * distance * (consumptionPer100Km / 100);
}

export default getGasolineAmount;
