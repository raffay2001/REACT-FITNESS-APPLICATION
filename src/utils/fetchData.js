export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "49bd1e1488msh1f654107e15f6bap1edd74jsnc78360cb2d08",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
