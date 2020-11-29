import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [
            {
                'title': 'Краска Wallquest, Bluesone',
                'id': '1',
                'price': '6000',
                'src': 'Photo(0).png',
                'newItms': true,
                'inStock': true,
                'contract': false,
                'exclusive': false,
                'sale': true,
                'category': 'new',
                'rating': '6'
            },
            {
                'title': 'Краска Wallquest, Brownsone',
                'id': '2',
                'price': '4800',
                'src': 'Photo(1).png',
                'newItms': false,
                'inStock': false,
                'contract': true,
                'exclusivee': true,
                'sale': false,
                'category': 'favorite',
                'rating': '5'
            },
            {
                'title': 'Краска Wallquest, Greensone',
                'id': '3',
                'price': '5290',
                'src': 'Photo(2).png',
                'newItms': false,
                'inStock': false,
                'contract': true,
                'exclusivee': true,
                'sale': true,
                'category': 'favorite',
                'rating': '4'
            },
            {
                'title': 'Краска Wallquest, Whitesone',
                'id': '4',
                'price': '2800',
                'src': 'Photo(3).png',
                'newItms': true,
                'inStock': false,
                'contract': true,
                'exclusivee': true,
                'sale': true,
                'category': 'favorite',
                'rating': '3'
            },
            {
                'title': 'Краска Wallquest, Redsone',
                'id': '5',
                'price': '3400',
                'src': 'Photo(4).png',
                'newItms': false,
                'inStock': true,
                'contract': false,
                'exclusive': false,
                'sale': false,
                'category': 'new',
                'rating': '3'
            },
            {
                'title': 'Краска Wallquest, Greensone',
                'id': '6',
                'price': '2800',
                'src': 'Photo(5).png',
                'newItms': false,
                'inStock': false,
                'contract': true,
                'exclusivee': true,
                'sale': true,
                'category': 'favorite',
                'rating': '5'
            },
            {
                'title': 'Краска Wallquest, Darksone',
                'id': '7',
                'price': '3400',
                'src': 'Photo(6).png',
                'newItms': false,
                'inStock': true,
                'contract': false,
                'exclusive': false,
                'sale': false,
                'category': 'favorite',
                'rating': '4'
            },
            {
                'title': 'Краска Wallquest, Navysone',
                'id': '8',
                'price': '6000',
                'src': 'Photo(7).png',
                'newItms': true,
                'inStock': true,
                'contract': false,
                'exclusive': false,
                'sale': false,
                'category': 'favorite',
                'rating': '3'
            },
            {
                'title': 'Краска Wallquest, Bluesone',
                'id': '9',
                'price': '6000',
                'src': 'Photo(0).png',
                'newItms': false,
                'inStock': true,
                'contract': false,
                'exclusive': false,
                'sale': false,
                'category': 'favorite',
                'rating': '5'
            },
            {
                'title': 'Краска Wallquest, Brownsone',
                'id': '10',
                'price': '4800',
                'src': 'Photo(1).png',
                'newItms': false,
                'inStock': false,
                'contract': true,
                'exclusivee': true,
                'sale': true,
                'category': 'new'
                , 'rating': '5'
            },
            {
                'title': 'Краска Wallquest, Greensone',
                'id': '11',
                'price': '5290',
                'src': 'Photo(2).png',
                'newItms': false,
                'inStock': false,
                'contract': true,
                'exclusivee': true,
                'sale': true,
                'category': 'favorite',
                'rating': '4'
            },
            {
                'title': 'Краска Wallquest, Whitesone',
                'id': '12',
                'price': '2800',
                'src': 'Photo(3).png',
                'newItms': false,
                'inStock': false,
                'contract': true,
                'exclusivee': true,
                'sale': true,
                'category': 'favorite',
                'rating': '5'
            },
            {
                'title': 'Краска Wallquest, Redsone',
                'id': '13',
                'price': '3400',
                'src': 'Photo(4).png',
                'newItms': false,
                'inStock': true,
                'contract': false,
                'exclusive': false,
                'sale': false,
                'category': 'favorite',
                'rating': '5'
            },
            {
                'title': 'Краска Wallquest, Greensone',
                'id': '14',
                'price': '2800',
                'src': 'Photo(5).png',
                'newItms': false,
                'inStock': false,
                'contract': true,
                'exclusivee': true,
                'sale': true,
                'category': 'favorite',
                'rating': '3'
            },
            {
                'title': 'Краска Wallquest, Darksone',
                'id': '15',
                'price': '3400',
                'src': 'Photo(6).png',
                'newItms': false,
                'inStock': true,
                'contract': false,
                'exclusive': false,
                'sale': false,
                'category': 'favorite',
                'rating': '4'
            },
            {
                'title': 'Краска Wallquest, Navysone',
                'id': '16',
                'price': '6000',
                'src': 'Photo(7).png',
                'newItms': true,
                'inStock': true,
                'contract': false,
                'exclusive': false,
                'sale': false,
                'category': 'favorite',
                'rating': '5'
            }
        ],
        cart: [],
        isSidebarOpen: false,
        isSideBarBottomOpen: false,
        isMenuOpen: false
    },
    getters,
    mutations,
    actions,

});
