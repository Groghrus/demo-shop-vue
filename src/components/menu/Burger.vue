<template>
  <button id="burger" class="burger-button" @click="toggleMenu" :class="{'active' : MENU_BAR}">
    <span class="burger-bar burger-bar__1"></span>
    <span class="burger-bar burger-bar__2"></span>
    <span class="burger-bar burger-bar__3"></span>
  </button>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: 'Burger',
    props: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters({
            MENU_BAR: 'MENUBAR_STATE'
        }),
    },
    methods: {
        ...mapActions([
            'TOGGLE_MENUBAR'
        ]),
        toggleMenu() {
            console.log('clk Burger component');
            this.TOGGLE_MENUBAR();
        },

    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 6;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  .burger-bar {
    background-color: $secondary-color;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .burger-bar__1 {
    transform: translateY(-6px);
  }

  .burger-bar__2 {
    transform: scaleX(0.6);
  }

  .burger-button:hover .burger-bar__2 {
    transform: scaleX(1);
  }

  .no-touchevents .burger-bar__2:hover {
    transform: scaleX(1);
  }

  .burger-bar__3 {
    transform: translateY(6px);
  }
}

#burger.active {
  .burger-button {
    transform: rotate(-180deg);
  }

  .burger-bar {
    background-color: $secondary-color;

  }

  .burger-bar__1 {
    transform: rotate(45deg);
  }

  .burger-bar__2 {
    opacity: 0;
  }

  .burger-bar__3 {
    transform: rotate(-45deg);
  }
}

</style>
