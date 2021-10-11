export default {
  state: {
    products: [
      {
        id: 1,
        title: "«Рождение Венеры» Сандро Боттичелли",
        price: 2000000,
        priceWithDiscount: 1000000,
        image: require("../assets/Rozhdeniye_Venery.jpg"),
        isDiscount: true,
        isSold: false,
        isInCart: true,
      },
      {
        id: 2,
        title: "«Тайная вечеря»  Леонардо да Винчи",
        price: 3000000,
        priceWithDiscount: 1000000,
        image: require("../assets/Taynaya_vecherya.jpg"),
        isDiscount: false,
        isSold: false,
        isInCart: false,
      },
      {
        id: 3,
        title: "«Сотворение Адама» Микеланджело",
        price: 6000000,
        priceWithDiscount: 5000000,
        image: require("../assets/Sotvoreniye_Adama.jpg"),
        isDiscount: true,
        isSold: false,
        isInCart: false,
      },
      {
        id: 4,
        title: "«Урок анатомии» Рембрандт",
        price: 6000000,
        priceWithDiscount: 5000000,
        image: require("../assets/Urok_anatomii.jpg"),
        isDiscount: false,
        isSold: true,
        isInCart: false,
      },
    ],
  },
  mutations: {
    addInCart(state, { ...products }, id) {
      const a = this.state.products;
      const b = a.map((product) =>
        product.id === id
          ? Object.assign({}, product, { isInCart: true })
          : product
      );
      console.log(5, id, products, b);
    },
  },
  actions: {
    addInCart({ commit }, id) {
      console.log(1, id);

      commit("addInCart", id);
    },
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
  },
};
