<template>
  <div class="cart-item flex">
    <hr>
    <div class="flex wrap">
      <div class="img-container">
        <img :src="require('@/assets/images/item_pic/' + cart_item_data.src)" alt="img">
      </div>
      <div class="item-container flex">
        <div>
          <p class="t16 ti">{{cart_item_data.title}}</p>
          <p class="t16 f600">{{cart_item_data.price}} &#8381</p>
          <p class="t16">Итого: {{cart_item_data.price * cart_item_data.quantity}} &#8381</p>
        </div>
        <div class="flex quant-wrap">

          <button class="btn-item" @click="decrementItem">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.3335 8H12.6668" stroke="black" stroke-width="1.4" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </button>
          <p class="items t16 f400">{{cart_item_data.quantity}}</p>
          <button class="btn-item" @click="incrementItem">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4.16663V15.8333" stroke="#1F2020" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M4.16699 10H15.8337" stroke="#1F2020" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </button>

          <button class="del-item" @click="delFromCart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 6L18 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
    name: 'CartItem',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            CART: 'CART'
        }),
    },
    methods: {
        delFromCart() {
            this.$emit('delFromCart');
        },
        incrementItem() {
            this.$emit('incrementItem');
        },
        decrementItem() {
            this.$emit('decrementItem');
        },

    },
    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1);
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.cart-item {
  flex-direction: column;
  background-color: $bg-color;
  margin-bottom: 16px;

  .item-container {
    @include media-breakpoint-down(xs) {
      flex-direction: column;
      align-items: flex-start;
    }

    > div:nth-child(1) {
      margin-right: 15px;
      @include media-breakpoint-down(xs) {
        margin-right: 0;
      }
    }

    .flex {
      justify-content: space-between;
    }
  }

  .wrap {
    @include media-breakpoint-down(xs) {
      flex-direction: column;
    }
  }

  .quant-wrap {
    .items {
      margin: 0 20px;
    }

    & > button {
      padding: 0 10px;
      height: 24px;
      @include media-breakpoint-down(xs) {
        margin-left: 0;
      }
    }

    .del-item {
      padding-right: 0;
    }

  }

}
</style>
