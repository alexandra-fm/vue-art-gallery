<template>
  <div class="card__wrapper" :class="{ sold: product.isSold }">

    <div class="card__wrapper-img">
      <img class="card__img" :alt="product.title" :src="product.image" />
    </div>

    <div class="card__wrapper-info">
      <h2 class="card__title">{{ product.title }}</h2>
      <div class="card__wrapper-descr">
        <div class="card__wrapper-text">
          <p
            v-if="!product.isSold"
            class="card__text"
            :class="{ price_cross: product.isDiscount }"
          >
            {{ product.price.toLocaleString("ru-RU") }} $
          </p>
          <p v-if="product.isDiscount" class="card__text" >
            {{ product.priceWithDiscount.toLocaleString("ru-RU") }} $
          </p>
          <p v-if="product.isSold" class="card__text">Продана на аукционе</p>
        </div>
        
        <button @click="addInCart" v-if="!product.isSold">{{buttonTitle}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data: () => ({
    buttonTitle: "Купить",
  }),
  /* computed: {
    setButtonTitle() {
      if (!this.product.isInCart) {
        return this.buttonTitle = "В корзине"
      }
        return buttonTitle = "Купить";
      } 
    }, */
  
  methods: {
    addInCart() {
      this.$emit("addInCart", this.product.id);
    }
  }
}
</script>

<style scoped>
.card__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 280px;
  min-height: 328px;
  margin-bottom: 25px;
  border: 1px solid #E1E1E1;
  transition: 1s;
}
.card__wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0px 5px 10px 2px rgba(52, 48, 48, 0.2);
}
.card__title {
  font-size: 18px;
  line-height: 27px;
}
button{
  width: 118px;
  height: 48px;
  background-color: #403432;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
  border: none;
  transition: 0.2s ease;
  cursor: pointer;
}
button:hover {
  background-color: #776763;
}
.card__wrapper-img {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  transform-origin: center;
  overflow: hidden;
  height: 160px;
}
.card__img {
  height: 100%;
  flex-shrink: 0;
}
.card__wrapper-info {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 24px;
}
.sold {
  opacity: 0.5
}
.card__wrapper-descr {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.card__text {
  font-weight: 700;
  font-size: 16px;
  line-height: 27px;
}
.price_cross {
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #A0A0A0;
  text-decoration: line-through;
}
</style>

