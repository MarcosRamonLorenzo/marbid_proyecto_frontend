import configUrl from "@/config/apis.config.js";

export const getAllCategoriesResponse = async () => {
  const response = await fetch(`${configUrl}/categories`);
  const data = await response.json();
  return data;
};

export const getCategoryByIdResponse = async (categoryID) => {
  const response = await fetch(`${configUrl}/categories/${categoryID}`);
  const data = await response.json();
  return data;
};
