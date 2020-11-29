<template>
  <transition name="slide-fade">
    <div class="sidebar-wrapper" ref="sidebar-wrapper">
      <div class="sidebar">
        <div class="sidebar-top flex" @click="closeSideBarFilters">
          <div class="filters-line">
            <svg width="28" height="4" viewBox="0 0 28 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.6" width="28" height="4" rx="2" fill="#1F2020"/>
            </svg>
          </div>
        </div>
        <div class="sidebar-content flex">
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
        closeSideBarFilters() {
            this.$emit('closeSideBarFilters');
        },
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', item => {
            if (item.target === vm.$refs['sidebar-wrapper']) {
                vm.closeSideBarFilters();
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
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 50%;
  overflow-y: hidden;
  border-radius: 24px 24px 0 0;

  &-top {
    height: 0;
    padding: 10px 0;
    cursor: pointer;
  }

  &-content {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 38px 24px;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

</style>
