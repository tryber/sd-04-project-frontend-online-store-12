export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((resp) => resp.json())
    .then((r) => r);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/${categoryId}/${query}`)
    .then((resp) => resp.json())
    .then((r) => r);
}
