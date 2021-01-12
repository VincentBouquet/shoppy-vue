import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    product: null,
    token: null,
    userLogin: null,
    cart: []
  },
  getters: {
    getProductId(state){
      return state.product.id
    }
  },
  mutations: {
    setProductList(state, productListToSave){
      state.productList = productListToSave
    },
    setProductDetail(state, productToSave) {
      state.product = productToSave
    },
    setToken(state, token){
      if (token) {
        state.token = "Bearer " + token
      } else {
        state.token = null
      }
    },
    setCart(state, cartToSave){
      state.cart = cartToSave
    },
    setUserLogin(state,loginToSave){
      state.userLogin = loginToSave
    }
  },
  actions: {
    async fetchProductList(context){
      const response = await Axios.get("http://localhost:8000/api/products", {headers:
            {'Authorization': context.state.token}});
      const products = response.data
      context.commit("setProductList", products)
    },
    async fetchProduct(context, id) {
      const response = await Axios.get(`http://localhost:8000/api/products/${id}`, {headers:
            {'Authorization': context.state.token}});
      const product = response.data
      context.commit("setProductDetail", product)
    },
    async fetchCart(context){
      const response = await Axios.get("http://localhost:8000/api/get-cart",{headers:
            {'Authorization': context.state.token}});
      const cart = response.data
      context.commit("setCart", cart)
    }
  }
})
