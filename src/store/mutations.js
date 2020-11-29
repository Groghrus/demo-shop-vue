export default {
    CHANGE_SIDEBAR(state) {
        state.isSidebarOpen = !state.isSidebarOpen;
    },
    CHANGE_SIDEBAR_BOTTOM(state) {
        state.isSideBarBottomOpen = !state.isSideBarBottomOpen;
    },
    CHANGE_MENUBAR(state) {
        state.isMenuOpen = !state.isMenuOpen;
    },
    SET_CART(state, product) {
        if (state.cart.length) {
            let inStock = false;
            state.cart.map(item => {
                if (item.id === product.id) {
                    inStock = true;
                    item.quantity++;
                }
            });
            if (!inStock) {
                state.cart.push(product);
            }
        } else {
            state.cart.push(product);
        }

    },
    REMOVE_FROM_CART(state, index) {
        state.cart.splice(index, 1);
    },
    REMOVE_ALL_FROM_CART(state, index) {
        state.cart.splice(index);
    },
    INCREMENT(state, index) {
        state.cart[index].quantity++;
    },
    DECREMENT(state, index) {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--;
        }

    }
}
