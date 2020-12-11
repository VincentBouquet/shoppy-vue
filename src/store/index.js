import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    product: null
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
    }
  },
  actions: {
    async fetchProductList(context){
      const response = await Axios.get("http://localhost:8001/api/products", {headers:
            {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDc2ODAwNTUsImV4cCI6MTYwODA0MDA1NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6IndpbGxpYW1AY29kZWNvbGxpZGVycy5jb20ifQ.iYdqva6Sz6a_U-x-DvOwvOX-JXFcI8Zcr8m2roxluIOX4j2UuFj81HksLQuK_etqhPBK_wazZAG-u2SIwpfJ3fFdlPCtSnVi-_WYexUCB2AppcjpdIndJYl5VqXG_Tuno34SzorR3r8HCYL7BBsaB7vef5sWtIl0NRUmd4xrY_F0d63z4xBGqbX9R-ksSbi4RA_8vH6IbEuh4JxQKLGfkFSp8-RuIsfkj2Q2T81xWttkSiKL5qpxpvAKmP6CvoOfEeN6XIagW27jOd_s4wFq6u5yn-uGTxL_MHVco3C-sRVREEBf9LJ3khBkDCPCdJpiUbWivzvvfrNHvqLuzvC91-C-yT0so6ywaZvWnud1CN5IhnGHUQMUvrdVAPZRDrIxWfXH9OYJp_a4EWaUKxWKLebd0T5LHVa4EYMjLZxOO0CwnZzDa87XSTpi4JhTUcBWVhTlw1Des0f7vwUK10PC4Cy4u2NxKhiuWyyAX_IeQFdIFmLqiqnHdukzG1lQ9HyYSo_4Hgl0P8AFjX8d0YbNuuTAsRIUVMBHKCaX-ynJ_IR8lyh7c0YJdKKmzw4rMG0fTcHZeOfB8G9kL74MPNIaawhVk48waOqnFBTEhf2FsagQ-Ks406WsqYNl0gX9vd_SfRJt9sMYoHnYvfV-v0phcYqwFH_t-sbfeQquAc-tTu4"}});
      const products = response.data
      context.commit("setProductList", products)
    },
    async fetchProduct(context, id) {
      const response = await Axios.get(`http://localhost:8001/api/products/${id}`, {headers:
            {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDc2ODAwNTUsImV4cCI6MTYwODA0MDA1NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6IndpbGxpYW1AY29kZWNvbGxpZGVycy5jb20ifQ.iYdqva6Sz6a_U-x-DvOwvOX-JXFcI8Zcr8m2roxluIOX4j2UuFj81HksLQuK_etqhPBK_wazZAG-u2SIwpfJ3fFdlPCtSnVi-_WYexUCB2AppcjpdIndJYl5VqXG_Tuno34SzorR3r8HCYL7BBsaB7vef5sWtIl0NRUmd4xrY_F0d63z4xBGqbX9R-ksSbi4RA_8vH6IbEuh4JxQKLGfkFSp8-RuIsfkj2Q2T81xWttkSiKL5qpxpvAKmP6CvoOfEeN6XIagW27jOd_s4wFq6u5yn-uGTxL_MHVco3C-sRVREEBf9LJ3khBkDCPCdJpiUbWivzvvfrNHvqLuzvC91-C-yT0so6ywaZvWnud1CN5IhnGHUQMUvrdVAPZRDrIxWfXH9OYJp_a4EWaUKxWKLebd0T5LHVa4EYMjLZxOO0CwnZzDa87XSTpi4JhTUcBWVhTlw1Des0f7vwUK10PC4Cy4u2NxKhiuWyyAX_IeQFdIFmLqiqnHdukzG1lQ9HyYSo_4Hgl0P8AFjX8d0YbNuuTAsRIUVMBHKCaX-ynJ_IR8lyh7c0YJdKKmzw4rMG0fTcHZeOfB8G9kL74MPNIaawhVk48waOqnFBTEhf2FsagQ-Ks406WsqYNl0gX9vd_SfRJt9sMYoHnYvfV-v0phcYqwFH_t-sbfeQquAc-tTu4"}});
      const product = response.data
      context.commit("setProductDetail", product)
    }
  },
  modules: {
  }
})
