// Yelp API https://www.yelp.com/developers/v3/manage_app?app_created=True
// Yelp ClientID: iJwixUBN4GUMrcm6TF4e4g
// Yelp Secret: ayM8TSldvchnTG7xJles311Ytmyzn2iZG0AkuWClDDgJazYugY6UxJms16HowjV6



const apiKey = "rAgJpqfXOplqxRWu9CTQ64nfjshUcAtu6UL5hZ3OA3Bx4PPoscyR4_nuNjOjma76FKRviAOGZtkpXnletcmzlYB5WhaqCaGUR8msAyi-27jdydewup3ZpGeNPPemZXYx";


const Yelp = {
    search(term, location, sortBy) {
      return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            }));
          }
        });
    },
  };
  
  export default Yelp;