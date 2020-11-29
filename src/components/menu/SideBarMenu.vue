<template>
  <transition name="slide-fade">
    <div class="sidebar-menu">
      <div class="sidebar-menu__panel flex">
        <ul class="flex t20 f600">
          <li>
            <router-link class="menu-link" to="/">Продукты</router-link>
          </li>
          <li>
            <router-link class="menu-link" to="/">Цвета</router-link>
          </li>
          <li>
            <router-link class="menu-link" to="/">Вдохновение</router-link>
          </li>
          <li>
            <router-link class="menu-link" to="/">Советы</router-link>
          </li>
          <li>
            <router-link class="menu-link" to="/">Найти магазин</router-link>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
    name: 'SideBarMenu',
    props: {},
    data() {
        return {};
    },
    computed: {},
    methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.sidebar-menu {
  background-color: $menu-color;
  position: fixed;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: hidden;
  padding: 40px;

  &__panel {
    ul {
      flex-direction: column;
      align-items: flex-start;

      li {
        padding-bottom: 3rem;

        a {
          width: 100%;
        }
      }
    }
  }
}

</style>
