<template>
  <main>
    <Notification
            :messages="messages"
            :timeout="2500"
    />
    <section class="main">

      <img class="main-img" src="../assets/images/slider_bg.png" alt="main-pic">
      <div class="container">
        <div class="wrapper">
          <agile class="slider flex" :dots="true">
            <div class="slide slider-wrapper" v-for="slide in slides" :key="slide.index">
              <h1 class="t72 f400">{{slide.title}}</h1>
              <p class="t16 f600" v-html="slide.description"></p>
            </div>
            <template slot="prevButton">
              <svg width="82" height="80" viewBox="0 0 82 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52 20L32 40L52 60" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M52 20L32 40L52 60" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </template>
            <template slot="nextButton">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 60L50 40L30 20" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M30 60L50 40L30 20" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </template>
          </agile>
        </div>
      </div>
    </section>
    <section class="showcase">
      <div class="container grid">
        <div class="col-1">
          <Filters @filter="filter"/>
        </div>
        <div class="flex col-2">
          <div class="sorting">
            <p class="amount t12 f600">{{PRODUCTS.length}} товаров</p>
            <button class="filters-mobile menu-link" @click.prevent="btnClickFiltr">Фильтры</button>
            <Sort @filter="filter"/>
            <SideBarFilters
                    v-show="SIDEBAR_STATE_BOTTOM"
                    @closeSideBarFilters="btnClickFiltr"
            >
              <Filters @filter="filter"/>
            </SideBarFilters>

          </div>
          <div class="products grid-5">
            <ProductItem
                    v-for="product in filteredProducts"
                    :product_data="product"
                    :key="product.id"
                    @addToCart="addToCart"
            >
            </ProductItem>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import {VueAgile} from 'vue-agile';
import ProductItem from '@/components/ProductItem';
import SideBarFilters from '@/components/sort/SideBarFilters';
import Filters from '@/components/sort/Filters';
import Sort from '@/components/sort/Sort';
import Notification from '@/components/Notification';

export default {
    name: 'Products',
    components: {
        Notification,
        Filters,
        SideBarFilters,
        ProductItem,
        Sort,
        agile: VueAgile,
    },
    data() {
        return {
            sortedProducts: [],
            slides: [
                {
                    index: 1,
                    title: 'Краски',
                    description: 'Идеально подходят для стен и других поверхностей. <br> Найди свой идеальный цвет!'
                },
                {
                    index: 2,
                    title: 'Эмали',
                    description: 'Идеально подходят для стен и других поверхностей. <br> Найди свой идеальный цвет!'
                },
                {
                    index: 3,
                    title: 'Лаки',
                    description: 'Идеально подходят для стен и других поверхностей. <br> Найди свой идеальный цвет!'
                },
            ],
            messages: []
        };
    },
    computed: {
        ...mapGetters({
            SIDEBAR_STATE_BOTTOM: 'SIDEBAR_STATE_BOTTOM',
            PRODUCTS: 'PRODUCTS',
            CART: 'CART',
        }),
        filteredProducts() {
            if (this.sortedProducts.length) {
                return this.sortedProducts;
            } else {
                return this.PRODUCTS;
            }
        },
    },
    methods: {
        ...mapActions({
            TOGGLE_SIDEBAR_BOTTOM: 'TOGGLE_SIDEBAR_BOTTOM',
            ADD_TO_CART: 'ADD_TO_CART',

        }),
        btnClickFiltr() {
            this.TOGGLE_SIDEBAR_BOTTOM();
        },
        addToCart(data) {
            this.ADD_TO_CART(data)
                .then(() => {
                    let timeValue = Date.now().toLocaleString();
                    this.messages.unshift(
                        {name: 'Товар добавлен в корзину', id: timeValue}
                    );
                });
        },
        filter(filter) {
            this.sortedProducts = this.$store.getters['getProductsByFilter'](filter);
        },
    },

};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.main {
  height: 560px;
  position: relative;
  @include media-breakpoint-down(xs) {
    height: auto;
  }

  .container {
    height: 100%;
  }

  &-hr {
    display: none;
    @include media-breakpoint-down(xs) {
      display: block;
    }
  }

  &-img {
    position: absolute;
    z-index: -1;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include media-breakpoint-down(xs) {
      display: none;
    }
  }

  .breadcrumb {
    justify-content: flex-start;
    height: 0;
    padding-top: 5px;

    & > li + li:before {
      padding: 0 5px;
      content: '\2022';
      color: $secondary-color;
      opacity: 0.3;
    }

    a {
      color: $secondary-color;
      opacity: 0.3;
    }
  }

  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 0 39px 0;
    @include media-breakpoint-down(xs) {
      padding: 15px 0 48px 0;
    }
  }

  .slider {
    @include media-breakpoint-down(xs) {
      display: none;
    }

    &-wrapper {
      height: 100%;
      text-align: center;
      color: $bg-color;

      & > h1 {
        margin-bottom: 24px;
        text-transform: inherit;
      }

      & > p {
        text-transform: inherit;
      }
    }
  }
}

.showcase {
  background-color: $bg-color;
  padding: 72px 0 141px 0;
  min-height: 100vh;

  @include media-breakpoint-down(xs) {
    padding: 0 0 50px 0;
  }

  .grid {
    .col-1 {
      height: 100%;
      @include media-breakpoint-down(md) {
        display: none;
      }
    }

    .col-2 {
      flex-direction: column;
    }
  }

  .sorting {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 44px;

    .filters-mobile {
      display: none;
      @include media-breakpoint-down(md) {
        display: block;
      }
    }

    .amount {
      @include media-breakpoint-down(md) {
        display: none;
      }
    }

  }
}

.agile {
  &__nav-button {
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    height: 100%;
    position: absolute;
    top: 0;
    transition-duration: .3s;
    width: 80px;

    &:hover {
      background-color: rgba(#000, 0.3);
      opacity: 1;
    }

    &--prev {
      left: 0;
    }

    &--next {
      right: 0;
    }
  }

  &__dots {
    width: 124px;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__dot {
    margin: 0 10px;

    button {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: .3s;
      width: 10px;
    }

    &--current, &:hover {
      button {
        background-color: $bg-color;
      }
    }
  }
}
</style>
