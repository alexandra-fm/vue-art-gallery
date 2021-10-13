<template>
  <div >
    <div class="card__wrapper" :class="{ sold: product.isSold }">
      <div class="card__wrapper-img">
        <img class="card__img" :alt="product.title" :src="product.image" />
      </div>

      <div class="card__wrapper-info">
        <button class="card__button-title" @click="showPopupInfo">
          {{ product.title }} {{ product.artist }}
        </button>
        <div class="card__wrapper-additional-info">
          <div class="card__wrapper-text">
            <p
              v-if="!product.isSold"
              class="card__text"
              :class="{ price_cross: product.isDiscount }"
            >
              {{ product.price.toLocaleString("ru-RU") }} $
            </p>
            <p v-if="product.isDiscount" class="card__text">
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

    <Popup  :isPopupOpen="isPopupOpen" v-if="isPopupOpen" @closePopup="closePopup">
      <h2 class="card__popup-title">
        {{ product.title }}
      </h2>

      <div class="card__popup-wrapper">

        <div class="card__popup-wrapper-img">
          <img class="card__popup-img" :alt="product.title" :src="product.image" />
        </div>

        <h2 class="card__popup-subtitle">
          {{ product.artist }}
        </h2>


        <p class="card__popup-descr">
          {{ product.description }}
        </p>

        <div class="card__popup-wrapper-info">
          <div class="card__popup-wrapper-text">
            <p
              v-if="!product.isSold"
              class="card__popup-text"
              :class="{ price_cross: product.isDiscount }"
            >
              {{ product.price.toLocaleString("ru-RU") }} $
            </p>
            <p v-if="product.isDiscount" class="card__popup-text">
              {{ product.priceWithDiscount.toLocaleString("ru-RU") }} $
            </p>
            <p v-if="product.isSold" class="card__popup-text">
              Продана на аукционе
            </p>
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
    </Popup>
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
    isPopupOpen: false,
  }),
  computed: {
    getButtonTitle() {
      return this.isInCart || this.product.inCart ? "В корзине" : "Купить";
    },
  },
  methods: {
    addInCart() {
      this.isInCart = true;
      this.$emit("addInCart", this.product);
    },
    showPopupInfo() {
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card__wrapper {
  display: flex;
  flex-direction: column;
  width: 280px;
  min-height: 328px;
  margin: 0 12px 24px 12px;
  border: 1px solid #e1e1e1;
  transition: 0.3s ease;
}
.card__wrapper:hover {
  transform: scale(1.05);
  box-shadow: 0px 5px 10px 2px rgba(52, 48, 48, 0.2);
}
.card__button-title {
  outline: none;
  border: none;
  cursor: pointer;
  text-align: left;
  background-color: #F6F3F3;
  font-size: 18px;
  line-height: 27px;
}
.card__button-title:hover {
  text-decoration: underline;
}
.card__button {
  width: 118px;
  height: 48px;
  background-color: #403432;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
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
  opacity: 0.5;
}
.card__wrapper-additional-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
.card__text, .card__popup-text {
  font-weight: 700;
  font-size: 16px;
  line-height: 27px;
}
.price_cross {
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #a0a0a0;
  text-decoration: line-through;
}
@media (max-width: 690px) {
  .card__wrapper {
    text-align: left;
    height: 160px;
  }
}
.card__popup-wrapper-img {
  height: 160px;
  margin-bottom: 1rem;
}
.card__popup-img {
  height: 100%;
  flex-shrink: 0;
}
.card__popup-title {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
}
.card__popup-subtitle {
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
}
.card__popup-descr {
  margin-bottom: 1rem;
  text-align: left;
  font-size: 14px;
  line-height: 20px;
}
.card__popup-wrapper-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
