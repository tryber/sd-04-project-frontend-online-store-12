export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let api = '';
  if (categoryId && query) api = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  if (categoryId) api = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  if (query) api = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const retorno = fetch(api)
    .then((response) => response.json());
  return retorno;
}
