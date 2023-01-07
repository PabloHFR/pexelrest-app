const AUTH = "563492ad6f9170000100000156af9ae065434075b1f1bd9d0fc2de9d";

export async function getApiImages(URL) {
  const dataFetch = await fetch(URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = await dataFetch.json();
  return data;
}
