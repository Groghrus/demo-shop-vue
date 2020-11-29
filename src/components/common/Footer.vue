<template>
  <div class="footer flex">
    <p class="t16 f600">Colors 2020 &copy;</p>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    props: {},
    data() {
        return {};
    },
    computed: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.footer {
  height: 312px;
  background-color: $b-color;
  flex-shrink: 0;
  @include media-breakpoint-down(md) {
    height: 106px;
  }

  p {
    color: $bg-color;
  }
}
</style>
