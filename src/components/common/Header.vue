<template>
  <div class="header">
    <div class="container header-container">
      <div class="flex">
        <div class="mobile-menu">
          <Burger/>
          <SideBarMenu
                  v-if="MENUBAR_STATE"
                  @closeMenuBar="togglePanel"
          />
        </div>
        <div class="logo">
          <a href="#">
            <svg width="131" height="26" viewBox="0 0 131 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.55 16.8C16.83 19.05 14.85 21.3 11.4 21.3C7.47 21.3 4.5 18.3 4.5 13.5C4.5 8.7 7.47 5.7 11.4 5.7C14.07 5.7 16.5 7.2 17.55 10.05H20.85C19.98 6.3 16.65 2.7 11.4 2.7C5.88 2.7 1.35 7.05 1.35 13.5C1.35 19.95 5.88 24.3 11.4 24.3C17.07 24.3 20.13 20.1 20.85 16.8H17.55ZM33.3141 24.3C38.8341 24.3 43.3641 19.95 43.3641 13.5C43.3641 7.05 38.8341 2.7 33.3141 2.7C27.7941 2.7 23.2641 7.05 23.2641 13.5C23.2641 19.95 27.7941 24.3 33.3141 24.3ZM33.3141 5.7C37.2441 5.7 40.2141 8.7 40.2141 13.5C40.2141 18.3 37.2441 21.3 33.3141 21.3C29.3841 21.3 26.4141 18.3 26.4141 13.5C26.4141 8.7 29.3841 5.7 33.3141 5.7ZM46.957 24L60.307 24L60.307 21L50.107 21V3L46.957 3L46.957 24ZM71.107 24.3C76.627 24.3 81.157 19.95 81.157 13.5C81.157 7.05 76.627 2.7 71.107 2.7C65.587 2.7 61.057 7.05 61.057 13.5C61.057 19.95 65.587 24.3 71.107 24.3ZM71.107 5.7C75.037 5.7 78.007 8.7 78.007 13.5C78.007 18.3 75.037 21.3 71.107 21.3C67.177 21.3 64.207 18.3 64.207 13.5C64.207 8.7 67.177 5.7 71.107 5.7ZM84.75 24H87.9V16.5H89.4L96.9 24L100.95 24L93.45 16.5H94.2C97.65 16.5 100.35 13.83 100.35 9.75C100.35 5.67 97.65 3 94.2 3L84.75 3V24ZM87.9 13.5V6L94.05 6C95.73 6 97.2 7.5 97.2 9.75C97.2 12 95.73 13.5 94.05 13.5L87.9 13.5ZM103.212 17.55C103.212 21.3 106.212 24.3 111.462 24.3C116.712 24.3 119.412 21.6 119.412 18.15C119.412 14.82 117.492 13.05 113.262 12.3L109.962 11.7C107.682 11.25 106.812 10.2 106.812 8.85C106.812 7.17 108.312 5.7 111.162 5.7C114.162 5.7 115.962 7.5 115.962 9.45L119.112 9.45C119.112 5.7 116.412 2.7 111.162 2.7C106.512 2.7 103.662 5.4 103.662 8.85C103.662 11.73 105.282 13.8 108.612 14.4L112.662 15.15C115.062 15.6 116.262 16.62 116.262 18.15C116.262 19.95 114.912 21.3 111.462 21.3C108.342 21.3 106.362 19.5 106.362 17.55H103.212Z"
                    fill="#1F2020"/>
              <circle cx="127" cy="6" r="4" fill="#1F2020"/>
            </svg>
          </a>
        </div>
        <nav>
          <ul class="flex t14">
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
        </nav>
        <div class="phones">
          <a href="tel:+7(495)221-77-69" class="t16 f600">+7 (495) 999-99-99</a>
          <p class="t14 f400">Заказать звонок</p>
        </div>
        <div class="icons flex">
          <button class="btn-header">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                    stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.5 17.5L13.875 13.875" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </button>
          <button>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <circle cx="11" cy="23" r="8.4" stroke="black" stroke-width="1.2"/>
                <circle cx="11" cy="7" r="3.4" stroke="black" stroke-width="1.2"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="22" height="22" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </button>
          <button>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0009 19C10.745 19.0001 10.4978 18.9074 10.3052 18.739C9.57966 18.1047 8.87674 17.5067 8.25817 16.9802C6.65691 15.7048 5.16127 14.3023 3.78581 12.7865C2.67695 11.5918 2.0423 10.0341 2.00085 8.4053C1.97621 6.99164 2.48598 5.62067 3.42845 4.56595C3.88583 4.0681 4.44256 3.67154 5.06275 3.40184C5.68294 3.13214 6.35283 2.9953 7.0292 3.00012C8.05552 2.99541 9.053 3.3392 9.8581 3.97514C10.2942 4.31625 10.6791 4.71815 11.0009 5.16854C11.3231 4.71841 11.7082 4.31682 12.1446 3.97605C12.9489 3.34036 13.9453 2.99628 14.9708 3.00012C15.6472 2.9953 16.3171 3.13214 16.9372 3.40184C17.5574 3.67154 18.1142 4.0681 18.5715 4.56595C19.514 5.62067 20.0238 6.99164 19.9991 8.4053C19.9585 10.0337 19.3249 11.5915 18.2169 12.7865C16.8425 14.3013 15.3481 15.7028 13.7482 16.9775C13.1287 17.5049 12.4267 18.1029 11.6975 18.7399C11.5045 18.9081 11.257 19.0005 11.0009 19V19Z"
                    stroke="black" stroke-width="1.2"/>
            </svg>
          </button>
          <button class="btn-cart" @click.prevent="btnOpenCart">{{CART.length}}</button>
          <SideBarCart
                  v-show="SIDEBAR_STATE_RIGHT"
                  @closeSideBar="closeSB"
          >
            <Cart
                    v-if="CART.length"
                    :cart_data="CART"
            />
            <p v-else>Ваша корзина пустая...</p>
          </SideBarCart>

        </div>
      </div>
      <hr class="main-hr">

    </div>
  </div>
</template>

<script>
import SideBarCart from '@/components/cart/SideBarCart';
import {mapActions, mapGetters} from 'vuex';
import Cart from '@/components/cart/Cart';
import Burger from '@/components/menu/Burger';
import SideBarMenu from '@/components/menu/SideBarMenu';

export default {
    name: 'Header',
    components: {SideBarMenu, Burger, Cart, SideBarCart},
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            SIDEBAR_STATE_RIGHT: 'SIDEBAR_STATE',
            MENUBAR_STATE: 'MENUBAR_STATE',
            CART: 'CART'
        }),
    },
    methods: {
        ...mapActions([
            'TOGGLE_SIDEBAR',
            'TOGGLE_MENUBAR'
        ]),
        btnOpenCart() {
            this.TOGGLE_SIDEBAR();
        },
        closeSB() {
            this.TOGGLE_SIDEBAR();
        },
        toggleMenu() {
            console.log('clk');
            this.TOGGLE_MENUBAR();
        },
        togglePanel() {
            this.TOGGLE_MENUBAR();
        }
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.header {
  height: 104px;
  background-color: $w-color;

  &-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .flex {
    justify-content: space-between;
  }

  .mobile-menu {
    display: none;
    @include media-breakpoint-down(md) {
      display: block;
      cursor: pointer;
    }
  }

  nav {
    ul {
      & > li {
        margin-left: 25px;

        &:nth-child(1) {
          margin-left: 0;
        }
      }
    }

    @include media-breakpoint-down(md) {
      display: none;
    }
  }

  .phones {
    @include media-breakpoint-down(md) {
      display: none;
    }

    p {
      color: $secondary-color;
      opacity: 0.3;
    }
  }

  .icons {
    & > button {
      margin-left: 25px;

      &:nth-child(1) {
        margin-left: 0;
      }

      @include media-breakpoint-down(md) {
        display: none;
      }
    }

    .close-btn {
      display: block;
    }

    .cart-wrapper {
      background-color: $bg-color;
      height: 100%;
      padding: 25px;
    }
  }

}

</style>
