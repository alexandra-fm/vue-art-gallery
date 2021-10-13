<template>
  <transition name="popup-fade" appear>
    <div class="popup" @click.self="closePopup">
      <div class="popup__wrapper">
        <div class="popup__header">
          <span class="popup__close">
            <i class="large material-icons" @click="closePopup">close</i>
          </span>
        </div>
        <div class="popup__content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isPopupOpen: {
      type: Boolean,
      require: true,
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    handleKeydown(e) {
      if (this.isPopupOpen && e.key === "Escape") {
        this.closePopup();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  background: rgba(27, 25, 25, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.popup__wrapper {
  position: fixed;
  max-width: 500px;
  padding: 16px;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: #F6F3F3;
  box-shadow: 0px 5px 10px 2px rgba(52, 48, 48, 0.8);
}
.popup__header {
  display: flex;
  justify-content: right;
  align-items: center;
}
.popup__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.popup__button {
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
.popup__button:hover {
  background-color: #776763;
}
.popup__close {
  cursor: pointer;
}
.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: all 0.5s;
}
.popup-fade-enter,
.popup-fade-leave-to {
  opacity: 0;
}
</style>
