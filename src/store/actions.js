export default {
    TOGGLE_SIDEBAR({commit}) {
        commit('CHANGE_SIDEBAR');
    },
    TOGGLE_SIDEBAR_BOTTOM({commit}) {
        commit('CHANGE_SIDEBAR_BOTTOM');
    },
    TOGGLE_MENUBAR({commit}) {
        commit('CHANGE_MENUBAR');
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
    },
    DEL_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index);
    },
    DEL_ALL_FROM_CART({commit}) {
        commit('REMOVE_ALL_FROM_CART');
    },
    INCREMENT_ITEM_IN_CART({commit}, index) {
        commit('INCREMENT', index);
    },
    DECREMENT_ITEM_IN_CART({commit}, index) {
        commit('DECREMENT', index);
    }
}
