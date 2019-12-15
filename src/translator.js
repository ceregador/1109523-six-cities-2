export default {
  translateOffer: (serverOffer) => {
    return {
      id: serverOffer.id,
      bedroomsCount: serverOffer.bedrooms,
      city: {
        name: serverOffer.city.name,
        coordinates: Object.values(serverOffer.city.location).slice(0, 2)
      },
      description: serverOffer.description,
      equipment: serverOffer.goods,
      photos: serverOffer.images,
      isBookmarked: serverOffer.is_favorite,
      isPremium: serverOffer.is_premium,
      coordinates: Object.values(serverOffer.location).slice(0, 2),
      maxGuestsCount: serverOffer.max_adults,
      image: serverOffer.preview_image,
      price: serverOffer.price,
      rating: serverOffer.rating,
      name: serverOffer.title,
      type: serverOffer.type
    };
  },

  translateUser: (serverUser) => {
    return {
      id: serverUser.id,
      email: serverUser.email,
      name: serverUser.name,
      avatarUrl: serverUser.avatarUrl,
      isPro: serverUser.is_pro
    };
  }
};
