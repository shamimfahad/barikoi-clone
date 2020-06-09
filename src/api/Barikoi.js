export const getSuggestions = async (searchString) => {
  const autoCompleteURI =
    'https://barikoi.xyz/v1/api/search/autocomplete/MTcxMDpONUZaUFRLMTlT/';

  const res = await fetch(`${autoCompleteURI}place?q='${searchString}'`);
  const data = await res.json();
  const places = data.places;

  return places;
};
