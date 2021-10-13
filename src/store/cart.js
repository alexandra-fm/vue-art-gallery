export default {
  state: {
    cart: [],
  },
  mutations: {
    addInCart(state, product) {
      state.cart.push(product);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  actions: {},
  getters: {
    getCart(state) {
      return state.cart;
    },
  },
};
