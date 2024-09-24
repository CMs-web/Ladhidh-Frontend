import axios from "axios";
import { getHeader } from "../../utils/headersUtils";

const base_url = "/api/user/cart";
const options = getHeader()

export const addProductToCart = async (formData) => {
  console.log(options)
  const res = await axios.post(base_url, formData, options);
  return res.data;
};

export const allCartItmes = async () => {
  const res = await axios.get(base_url, options);
  return res.data;
};

export const removeFromCart = async (formData) => {
  const res = await axios.delete(base_url + "/remove", {
    ...options,
    data: { productId: formData },
  });

  return res.data;
};
