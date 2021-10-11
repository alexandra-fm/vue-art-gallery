<template>
  <div id="app">
    <Navbar />

    <div class="wrapp">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

*{
  background-color: #F6F3F3;
  box-sizing: border-box;
  color: #343030;
  padding: 0;
  margin: 0;
  font-family: Merriweather, Helvetica, Arial, serif;
  font-weight: 400;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.wrapp {
  max-width: 1290px;
  padding: 45px;
  margin: 0 auto;
}
</style>
