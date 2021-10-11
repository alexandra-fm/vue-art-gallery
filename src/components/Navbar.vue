<template>
  <nav class="navbar">
    <div class="navbar__wrapper">
      <ul class="navbar__list">
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
        >
          <a href="#">{{ link.title }}</a>
        </router-link>
      </ul>
      <Search class="search"/>
    </div>
    
  </nav>
</template>

<script>
import Search from "@/components/Search";

export default {
  components: {
    Search
  },
  data: () => ({
    links: [
      { title: "Каталог", url: "/", exact: true },
      { title: "Доставка", url: "/Delivery", exact: true },
      { title: "Оплата", url: "/Payment", exact: true },
      { title: "Контакты", url: "/Contacts", exact: true },
      { title: "О компании", url: "/AboutCompany", exact: true },
    ]
  })
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 96px !important;
  padding: 0 2rem;
  z-index: 1000;
  font-size: 14px;
  line-height: 21px;
  border-bottom: 1px solid #E1E1E1;
}
.navbar__wrapper{
  width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.navbar__list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}
.navbar__list > li {
  margin-right: 48px;
}
a {
  text-decoration: none;
}
</style>