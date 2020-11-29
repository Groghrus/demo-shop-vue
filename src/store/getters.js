export default {
    PRODUCTS(state) {
        return state.products;
    },
    SIDEBAR_STATE(state) {
        return state.isSidebarOpen;
    },
    SIDEBAR_STATE_BOTTOM(state) {
        return state.isSideBarBottomOpen;
    },
    MENUBAR_STATE(state) {
        return state.isMenuOpen;
    },
    CART(state) {
        return state.cart;
    },
    getProductsByFilter: state => filter => {
        let filtered = state.products
            .filter(product => {
                if (filter.selectNew === true) {
                    return product.newItms === filter.selectNew;
                } else if (filter.selectInStock === true) {
                    return product.inStock === filter.selectInStock;
                } else if (filter.selectContract === true) {
                    return product.contract === filter.selectContract;
                } else if (filter.selectExclusivee === true) {
                    return product.exclusivee === filter.selectExclusivee;
                } else if (filter.selectSale === true) {
                    return product.sale === filter.selectSale;
                } else {
                    return filter.inputSearch === '' || product.title.toLowerCase().indexOf(filter.inputSearch.toLowerCase()) !== -1;
                }
            });


        let sortKey = filter.selectSort.split(':')[0];
        let sortDir = filter.selectSort.split(':')[1];

        //lodash ver.
        /*let sorted = _.sortBy(filtered, product => {
            return Number(product[sortKey]);
        });*/

        let sorted = filtered.sort((a, b) => {
            return Number(a[sortKey] - b[sortKey]);
        });

        if (sortDir === 'desc') {
            sorted = sorted.reverse();
        }
        return sorted;
    }
};
