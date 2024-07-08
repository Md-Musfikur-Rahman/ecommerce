import axios from 'axios';

const HEADERS = {
  "x-rapidapi-key": "c4e224170fmsh393bd833f6571eep1d65b7jsn74ef279978db",
  "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com"
};

export async function fetchProductCategoryList() {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/product-category-list',
    params: {country: 'US'},
    headers: HEADERS
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchProductByCategory(id) {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/products-by-category',
    params: {
      category_id: id ||'2478868012',
      page: '1',
      country: 'US',
      sort_by: 'RELEVANCE',
      product_condition: 'ALL'
    },
    headers: HEADERS
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDealProducts(){
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/deals-v2',
    params: {
      country: 'US',
      min_product_star_rating: 'ALL',
      price_range: 'ALL',
      discount_range: 'ALL'
    },
    headers: HEADERS
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchProductDetails(id){
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/product-details',
    params: {
      asin: id || 'B07ZPKBL9V',
      country: 'US'
    },
    headers: HEADERS
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}