import axios from "axios";
function getAllProducts() {
    return axios.get("https://fakestoreapi.com/products")
}
export function getAllProducts(id) {
    return axios.get(`https://fakestoreapi.com/products/${id}`);
}
