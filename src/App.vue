<template>
  <div id="app" :class="{'act': MENU_BAR}">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import {mapGetters} from 'vuex';

export default {
    components: {Footer, Header},
    computed: {
        ...mapGetters({
            MENU_BAR: 'MENUBAR_STATE'
        }),

    },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  &.act{
    position: fixed;
  }
}
</style>
