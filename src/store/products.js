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
        isInCart: false,
      },
      {
        id: 2,
        title: "«Тайная вечеря»  Леонардо да Винчи",
        price: 3000000,
        priceWithDiscount: 1000000,
        image: require("../assets/Taynaya_vecherya.jpg"),
        isDiscount: false,
        isSold: false,
      },
      {
        id: 3,
        title: "«Сотворение Адама» Микеланджело",
        price: 6000000,
        priceWithDiscount: 5000000,
        image: require("../assets/Sotvoreniye_Adama.jpg"),
        isDiscount: true,
        isSold: false,
      },
      {
        id: 4,
        title: "«Урок анатомии» Рембрандт",
        price: 6000000,
        priceWithDiscount: 5000000,
        image: require("../assets/Urok_anatomii.jpg"),
        isDiscount: false,
        isSold: true,
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
