const defaultURL = "https://restcountries.com/v3.1/";

export const getByName = async (value) => {
  const response = await fetch(`${defaultURL}name/${value}`);
  const data = await response.json();
  return data;
};

export const getByRegion = async (value) => {
  const response = await fetch(`${defaultURL}region/${value}`);
  const data = await response.json();
  return data;
};

export const getAll = async () => {
  const response = await fetch(`${defaultURL}all`);
  const data = await response.json();
  return data;
};

export const getByCode = async (value) => {
  const response = await fetch(`${defaultURL}alpha/${value}`);
  const data = await response.json();
  return data;
};
