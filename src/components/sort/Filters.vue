<template>
  <div class="filters">
    <div class="btn-wrap">
      <div class="button-1 button r">
        <input type="checkbox" class="checkbox" v-model="filter.selectNew">
        <div class="knobs"></div>
        <div class="layer"></div>
      </div>
      <p class="t12">Новинки</p>
    </div>
    <div class="btn-wrap">
      <div class="button-1 button r">
        <input type="checkbox" class="checkbox" v-model="filter.selectInStock">
        <div class="knobs"></div>
        <div class="layer"></div>
      </div>
      <p class="t12">Есть в наличии</p>
    </div>
    <div class="btn-wrap">
      <div class="button-1 button r">
        <input type="checkbox" class="checkbox" v-model="filter.selectContract">
        <div class="knobs"></div>
        <div class="layer"></div>
      </div>
      <p class="t12">Контрактные</p>
    </div>
    <div class="btn-wrap">
      <div class="button-1 button r">
        <input type="checkbox" class="checkbox" v-model="filter.selectExclusivee">
        <div class="knobs"></div>
        <div class="layer"></div>
      </div>
      <p class="t12">Эксклюзивные</p>
    </div>
    <div class="btn-wrap">
      <div class="button-1 button r">
        <input type="checkbox" class="checkbox" v-model="filter.selectSale">
        <div class="knobs"></div>
        <div class="layer"></div>
      </div>
      <p class="t12">Распродажа</p>
    </div>

    <button class="btn t12 f600" @click="clear">Сбросить фильтры</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Filters',
    props: {},
    data() {
        return {
            sortRules: [
                {title: 'Новинки', key: 'newItms:desc', id: 'id'},
                {title: 'Есть в наличии', key: 'inStock'},
                {title: 'Контрактные', key: 'contract'},
                {title: 'Эксклюзимные', key: 'exclusivee'},
                {title: 'Распродажа', key: 'sale'}
            ],
            filter: {
                selectSort: '',
                inputSearch: '',
                selectNew: false,
                selectInStock: false,
                selectContract: false,
                selectExclusivee: false,
                selectSale: false
            },

        };
    },
    computed: {
        ...mapGetters({
            PRODUCTS: 'PRODUCTS'
        }),

    },
    methods: {
        clear() {
            this.filter = {
                selectSort: '',
                inputSearch: '',
                selectNew: false,
                selectInStock: false,
                selectContract: false,
                selectExclusivee: false,
                selectSale: false
            };
        }
    },
    watch: {
        filter: {
            handler(newFilter) {
                this.$emit('filter', newFilter);
            },
            deep: true
        }
    }

};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.filters {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &-btn {
    input, label {
      display: block;
    }
  }
}

.btn-wrap {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  p {
    margin-left: 12px;
  }
}

.button {
  position: relative;
  top: 0;
  width: 36px;
  height: 22px;
  overflow: hidden;
}

.button.r, .button.r .layer {
  border-radius: 100px;
}

.knobs, .layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: $btn-color;
  transition: 0.3s ease all;
  z-index: 1;
}

.button-1 .knobs:before {
  content: '';
  position: absolute;
  top: 7px;
  left: 8px;
  width: 4px;
  height: 4px;
  padding: 2px 2px;
  background-color: $secondary-color;
  border-radius: 50%;
  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

.button-1 .checkbox:checked + .knobs:before {
  content: '';
  left: 22px;
  background-color: $secondary-color;
}

.button-1 .checkbox:checked ~ .layer {
  background-color: $primary-color;
}

.button-1 .knobs, .button-1 .knobs:before, .button-1 .layer {
  transition: 0.3s ease all;
}
</style>
