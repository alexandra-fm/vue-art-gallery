<template>
  <div id="app">
    <Navbar />

    <div class="wrapp">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

*{
  box-sizing: border-box;
  color: #343030;
  padding: 0;
  margin: 0;
  font-family: Merriweather, Helvetica, Arial, serif;
  font-weight: 400;
}

#app {
  background-color: #F6F3F3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.wrapp {
  max-width: 1314px;  
  min-height: calc(100vh - 192px);
  padding: 45px;
  margin: 0 auto;
  margin-top: 96px;
  @media (max-width: 1300px) {
    max-width: 1050px;
  }
  @media (max-width: 1000px) {
    max-width: 700px;
  }
}
</style>
