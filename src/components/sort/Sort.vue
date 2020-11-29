<template>
  <div class="sort flex">
    <input v-model.trim="filter.inputSearch" type="text" placeholder="Поиск по названию товара">
    <select class="sort-slct" v-model="filter.selectSort">
      <option class="sort-opt" v-for="rule in sortRules" :value="rule.key" :key="rule.key">{{rule.title}}</option>
    </select>
  </div>
</template>

<script>

export default {
    name: 'Sort',
    props: {},
    data() {
        return {
            sortRules: [
                {title: 'Сначала Дорогие', key: 'price:desc'},
                {title: 'Сначала Недорогие', key: 'price:asc'},
                {title: 'Сначала Популярные', key: 'rating:desc'},
                {title: 'Сначала Новые', key: 'newItms:desc'},
            ],
            filter: {
                inputSearch: '',
                selectSort: 'price:desc'
            },
        };
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

.sort {
  align-items: flex-start;

  & > * {
    margin-left: 25px;

    &:nth-child(1) {
      margin-left: 0;
    }
  }

  & > input {
    @include media-breakpoint-down(sm) {
      display: none;
    }
  }

  .sort-slct {
    padding: 0 5px;
    width: 100%;
  }

  .sort-opt {
    width: 100%;

    &:checked {
      background: $primary-color;
    }

  }
}

</style>
