import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import dataProducts from '../../public/data/products.json'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        products: dataProducts,
        isSidebarOpen: false,
        isSideBarBottomOpen: false,
        isMenuOpen: false
    },
    getters,
    mutations,
    actions,

});
