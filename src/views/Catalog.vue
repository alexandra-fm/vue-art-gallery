<template>
  <div class="home">
    <h1 class="home__title">Картины эпохи Возрождения</h1>
    <!-- <img alt="Vue logo" src="../assets/Rozhdeniye_Venery.jpg" /> -->
    <div class="card">
      <CardProduct
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
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
  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    }
  },
  methods: {
    addInCart(id) {
      this.$store.dispatch("addInCart", id)
    }
  }
};
</script>

<style scoped>
.home{
  text-align: left;
}
.home__title {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
}
.card{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 39px;
}
</style>
