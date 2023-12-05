import { PRODUCT_DETAILS_ERROR, PRODUCT_DETAILS_SUCCESS } from "../Types";
import api from "../Api";

const ProductDetailsSuccess = (res) => {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: res,
  };
};
const ProductDetailsError = (error) => {
  return {
    type: PRODUCT_DETAILS_ERROR,
    error: error,
  };
};
const ProductDetailsActionHandler = (url) => {
  return async (dispatch) => {
    try {
      const jsonData = await api.productDetailsApi(url);
      dispatch(ProductDetailsSuccess(jsonData));
    } catch (error) {
      dispatch(ProductDetailsError(error.message));
    }
  };
};
const productDetailsAction = {
  ProductDetailsSuccess,
  ProductDetailsError,
  ProductDetailsActionHandler,
};
export default productDetailsAction;
