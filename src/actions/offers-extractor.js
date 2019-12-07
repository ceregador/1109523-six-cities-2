const getUniqueCitiesFromOffers = (offers) => {
  const citiesMap = new Map();
  for (const offer of offers) {
    if (!citiesMap.has(offer.city.name)) {
      citiesMap.set(offer.city.name, offer.city);
    }
  }

  return Array.from(citiesMap.values());
};

const getOffersByCityName = (offers, cityName) => {
  return offers.filter((offer) => offer.city.name === cityName);
};

export {getUniqueCitiesFromOffers, getOffersByCityName};
