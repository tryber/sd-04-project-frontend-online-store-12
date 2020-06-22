async function getItemById(id) {
  return fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => response.json());
}

export default getItemById;