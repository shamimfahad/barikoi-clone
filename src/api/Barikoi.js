const baseURI = 'https://barikoi.xyz/v1/api/search';

export const getSuggestions = async (searchString) => {
  const autoCompleteURI = `${baseURI}/autocomplete/MTcxMDpONUZaUFRLMTlT/`;

  try {
    const res = await fetch(`${autoCompleteURI}place?q='${searchString}'`);
    const data = await res.json();
    const places = data.places;

    return places;
  } catch (error) {
    console.log(error);
  }
};

export const revGeocoding = async (latLng) => {
  const { lat, lng } = latLng;

  try {
    const res = await fetch(
      `${baseURI}/reverse/MTcxMDpONUZaUFRLMTlT/geocode?longitude=${lng}&latitude=${lat}&district=true&post_code=true&country=true&sub_district=true&union=false&pauroshova=false&location_type=true`
    );
    const data = await res.json();
    let place = data.place;

    Object.assign(place, { latitude: `${lat}`, longitude: `${lng}` });
    return place;
  } catch (error) {
    console.log(error);
  }
};
