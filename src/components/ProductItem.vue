<template>
  <div class="products-item">
    <div class="img-container">
      <img :src="require('@/assets/images/item_pic/' + product_data.src)" alt="img">
    </div>
    <div class="item-container">
      <p class="t16 ti">{{product_data.title}}</p>
      <div class="flex">
        <p class="t16 f600">{{product_data.price}} &#8381</p>
        <button class="btn-item" @click="addToCart">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4.16663V15.8333" stroke="#1F2020" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
            <path d="M4.16699 10H15.8337" stroke="#1F2020" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
    name: 'ProductItem',
    props: {
        product_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product_data);
        }
    },

};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.products-item {
  background-color: $bg-color;
  padding: 5px;

  .item-container {
    padding: 5px;

    p {
      padding: 5px;
    }

    .flex {
      justify-content: space-between;
    }
  }

  hr {
    bottom: 0;
    background: #000000;
    opacity: 0.1;
    height: 1px;
  }
}

</style>
