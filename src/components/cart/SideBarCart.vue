<template>
  <transition name="slide-fade">
    <div class="sidebar-wrapper" ref="sidebar-wrapper">
      <div class="sidebar">
        <div class="sidebar-top">
          <h2 class="t30 f600">Корзина</h2>
          <button class="close-btn" @click="closeSideBar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M6 6L18 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="sidebar-content">
          <slot>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
    name: 'SideBar',
    props: {},
    data() {
        return {};
    },
    computed: {},
    methods: {
        closeSideBar() {
            this.$emit('closeSideBar');
        }
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', item => {
            if (item.target === vm.$refs['sidebar-wrapper']) {
                vm.closeSideBar();
            }
        });
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.sidebar-wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}

.sidebar {
  background-color: $bg-color;
  position: fixed;
  z-index: 15;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding: 40px;
  @include media-breakpoint-down(md) {
    width: 90%;
  }

  &-top {
    margin-bottom: 9.5rem;
    @include media-breakpoint-down(xs) {
      margin-bottom: 1.5rem;
    }
  }

  h2 {
    text-transform: inherit;
  }

  .close-btn {
    position: absolute;
    top: 40px;
    right: 40px;
    border-radius: 50%;
    border: 1px solid rgba(31, 32, 32, 0.4);
    display: flex;
    align-items: center;
    padding: 7px;

    &:hover {
      border: 1px solid $primary-color;
      transition: border 0.2s ease-in-out;
    }
  }
}


</style>
