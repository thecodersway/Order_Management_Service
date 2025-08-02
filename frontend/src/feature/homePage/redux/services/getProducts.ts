import axios from 'axios';
import { URL } from '../../../../constants/apiEndpoints';


const getProductsService = () => {
  return axios.get(URL.getProducts);
};

export default getProductsService;
