export default {
  state: {
    products: [
      {
        id: 1,
        artist: "Сандро Боттичелли",
        title: "«Рождение Венеры»",
        price: 2000000,
        priceWithDiscount: 1000000,
        image: require("../assets/Rozhdeniye_Venery.jpg"),
        isDiscount: true,
        isSold: false,
        isInCart: false,
        description:
          "Картина представляет собой живопись темперой на холсте размером 172,5 × 278,5 см, иллюстрирует миф рождения Венеры (греч. Афродиты).",
      },
      {
        id: 2,
        artist: "Леонардо да Винчи",
        title: "«Тайная вечеря»",
        price: 3000000,
        priceWithDiscount: 1000000,
        image: require("../assets/Taynaya_vecherya.jpg"),
        isDiscount: false,
        isSold: false,
        description:
          "Монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане.",
      },
      {
        id: 3,
        artist: "Микеланджело",
        title: "«Сотворение Адама»",
        price: 6000000,
        priceWithDiscount: 5000000,
        image: require("../assets/Sotvoreniye_Adama.jpg"),
        isDiscount: true,
        isSold: false,
        description:
          "Фреска, написанная около 1511 года. Фреска является четвёртой из девяти центральных композиций потолка Сикстинской капеллы, посвящённых девяти сюжетам книги Бытия.",
      },
      {
        id: 4,
        artist: "Рембрандт",
        title: "«Урок анатомии»",
        price: 6000000,
        priceWithDiscount: 5000000,
        image: require("../assets/Urok_anatomii.jpg"),
        isDiscount: false,
        isSold: true,
        description:
          "Картина, написанная в 1632 году. Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека.",
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
