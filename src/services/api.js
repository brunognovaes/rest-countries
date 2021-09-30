const defaultURL = 'https://restcountries.com/v2/';

export const getByName = async (value) => {
  const response = await fetch(`${defaultURL}name/${value}`);
  const data = await response.json();
  return data;
}

export const getAll = async () => {
  const response = await fetch(`${defaultURL}all`);
  const data = await response.json();
  return data;
}