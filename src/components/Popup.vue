<template>
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
      <div class="popup__footer">
        <button class="popup__button">Купить</button>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$emit("closePopup");
    }
  }
}
</script>

<style scoped>
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
  width: 400px;
  padding: 16px;
  top: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}
.popup__header {
  display: flex;
  justify-content: right;;
  align-items: center;
}
.popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup__button{
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
.popup__button:hover {
  background-color: #776763;
}
.popup__close {
  cursor: pointer;
}
</style>