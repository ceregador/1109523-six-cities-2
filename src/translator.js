const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export default {
  translateOffer: (serverOffer) => {
    return {
      id: serverOffer.id,
      bedroomsCount: serverOffer.bedrooms,
      city: {
        name: serverOffer.city.name,
        coordinates: Object.values(serverOffer.city.location).slice(0, 2)
      },
      host: {
        id: serverOffer.host.id,
        name: serverOffer.host.name,
        isPro: serverOffer.host.is_pro,
        avatarUrl: serverOffer.host.avatar_url
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
      type: capitalize(serverOffer.type),
      images: serverOffer.images
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
  },

  translateReview: (serverReview) => {
    return {
      rating: serverReview.rating,
      comment: serverReview.comment,
      reviewData: serverReview.date,
      user: {
        name: serverReview.user.name,
        avatarUrl: serverReview.user.avatar_url,
        isPro: serverReview.user.isPro
      }

    };
  }
};
