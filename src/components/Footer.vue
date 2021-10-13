<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <a href="tel:+78125555555" class="footer__phone">
        <i class="material-icons">phone</i>
        +7 (812) 555-55-55
      </a>
      <router-link to="/Contacts" exact="true">
        <i class="material-icons">location_on</i>
        г. Санкт-Петербург, ул. Ефимова, 3
      </router-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  background-color: #eceaea;
  * {
    color: #555555 !important;
    font-size: 14px;
    line-height: 21px;
    text-decoration: none;
    cursor: pointer;
  }
}
.footer__wrapper {
  width: 1120px;
  display: flex;
  justify-content: right;
  
}
.footer__phone {
  margin-right: 54px;
}
a:hover {
  text-decoration: underline;
}
</style>
