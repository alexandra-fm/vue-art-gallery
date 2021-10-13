<template>
  <div class="card">
    <div class="card__wrapper" :class="{ sold: product.isSold }">
      <div class="card__wrapper-img">
        <img class="card__img" :alt="product.title" :src="product.image" />
      </div>

      <div class="card__wrapper-info">
        <button class="card__title-button" @click="showPopupInfo">
          {{ product.title }}
        </button>
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

          <button 
            class="card__button"
            @click="addInCart"
            v-if="!product.isSold"
          >
            {{ getButtonTitle }}
          </button>
        </div>
      </div>
    </div>

    <Popup 
      v-if="isInfoPopupVisible"
      @closePopup ="closePopup" 
    > 
    <div class="card__wrapper-img">
        <img class="card__img" :alt="product.title" :src="product.image" />
      </div>
      <h2 class="card__title" >
          {{ product.title }}
      </h2>
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
    </Popup >
  </div>
</template>

<script>
import Popup from "@/components/Popup";

export default {
  props: ["product", "cart"],
  components: {
    Popup,
  },
  data: () => ({
    buttonTitle: "Купить",
    isInCart: false,
    isInfoPopupVisible: false,
  }),
  computed: {
    getButtonTitle() {
      return this.isInCart || this.product.inCart ? "В корзине" : "Купить"
    },
  },
  methods: {
    addInCart() {
      this.isInCart = true
      this.$emit("addInCart", this.product);
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closePopup() {
      this.isInfoPopupVisible = false;
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
  margin: 0 12px 24px 12px;
  border: 1px solid #E1E1E1;
  transition: 0.3s ease;
}
.card__wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0px 5px 10px 2px rgba(52, 48, 48, 0.2);
}
.card__title-button {  
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 18px;
  line-height: 27px;
}
.card__button{
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
.card__button:hover {
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
@media (max-width: 690px) {
  .card__wrapper {
    text-align: left;
  }
}
</style>

