<template>
  <div>
    <input
      v-model="title"
      type="text"
      placeholder="Поиск по названию картины"
    />
    <button @click="searchPicture">Найти</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
  }),
  methods: {
    searchPicture() {
      this.title = "";
    }
  }
}
</script>

<style scoped>
input{
  width: 294px;
  height: 48px;
  font-size: 14px;
  line-height: 21px;
  background-color: #F6F3F3;
  color: #9F9F9F;
  border: 1px solid #E1E1E1;
  padding-left: 16px;
}
input:focus {
  border-color: #B5B5B5;
  color: #343030;
  outline: none !important;
}
button{
  width: 122px;
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
button:disabled {
  background-color: #C1B4B1;
}
</style>