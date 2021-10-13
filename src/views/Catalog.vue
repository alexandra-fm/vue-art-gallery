<template>
  <div class="catalog">
    <h1 class="catalog__title">Картины эпохи Возрождения</h1>
    <div class="card">
      <CardProduct
        v-for="product in getProducts"
        :key="product.id"
        :product="product"
        :cart="cart"
        @addInCart="addInCart"
    />
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct";

export default {
  name: "Catalog",
  components: {
    CardProduct,
  },
  data: () => ({
    cart: [],
  }),
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;

      /* if(this.cart && this.cart.length) {
        return products.map((el) => {
          if(this.cart.includes(el.id)) {
            return {...el, isInCart: true}
          } 
          return el
        })
      } else {
      return products;
      } */
    }, 
    /* getButtonTitle() {
      const cartItem = this.cart.map((item) => item.id);
      const isInCart = this.$store.products.filter(
        (product) => product.id === cartItem
      );
      console.log(cartItem);
      console.log(isInCart);
      return (console.log(1*5))
    } */
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    //this.$store.commit('initCard', elements)
    //this.cart = elements.map((item) => item.id)
  },
  methods: {
    addInCart(product) {
      this.$store.commit("addInCart", product)
    }
  }
};
</script>

<style scoped>
.catalog{
  text-align: left;
}
.catalog__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin-left: 12px;
}
.card{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
}
.popup {
  position: relative;
}
@media (max-width: 690px) {
  .home {
    text-align: center;
  }
  .card {
    justify-content: center;
  }
}

</style>
