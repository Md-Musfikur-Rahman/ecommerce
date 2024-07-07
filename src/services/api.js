const API_URL = "https://real-time-amazon-data.p.rapidapi.com";

const HEADERS = {
  "x-rapidapi-key": process.env.RAPIDAPI_KEY,
  "x-rapidapi-host": process.env.RAPIDAPI_HOST,
};

export async function fetchProducts() {
  const url = `${API_URL}/product-category-list?country=US`;
  const options = {
    method: "GET",
    headers: HEADERS,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch product categories:", error);
    throw error;
  }
}

export async function fetchProductByCat() {
  const url = `${API_URL}/products-by-category?amazon-devices&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL`;
  const options = {
    method: "GET",
    headers: HEADERS,
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch product categories:", error);
    throw error;
  }
}
