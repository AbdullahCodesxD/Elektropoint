const API_URL = import.meta.env.VITE_API_URL;

import axios from "axios";

const API = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export const postToApi = async (url, data) => {
  try {
    const config = {};
    if (data instanceof FormData) {
      config.headers = { "Content-Type": "multipart/form-data" };
    }
    const response = await API.post(url, data, config);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getFromApi = async (url) => {
  try {
    const response = await API.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const patchApi = async (url, data) => {
  try {
    const response = await API.patch(url, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteApi = async (url) => {
  try {
    const response = await API.delete(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
