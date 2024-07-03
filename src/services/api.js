import axios from "axios";

const API_URL = process.env.RAPIDAPI_URL;
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "null",
  "x-rapidapi-ua": process.env.RAPIDAPI_US,
  "x-rapidapi-key": process.env.RAPIDAPI_KEY,
  "x-rapidapi-host": process.env.RAPIDAPI_HOST,
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/endpoint-for-products`, {
      headers: HEADERS,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
