import configUrl from "@/config/apis.config.js";

export const getAllCategoriesResponse = async () => {
  const response = await fetch(`${configUrl}/categories`);
  const data = await response.json();
  return data;
};
