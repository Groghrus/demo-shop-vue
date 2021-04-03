<template>
  <div class="сart">
    <Notification
            :messages="messages"
            :timeout="1500"
    />
    <div class="cart-buttons flex">
      <div class="quantity t14 f400">{{CART.length}} товара</div>
      <button class="clear t14 f400" @click="delAllFromCart">Очистить список</button>
    </div>
    <CartItem
            v-for="(item, index) in cart_data"
            :key="item.id"
            :cart_item_data="item"
            @delFromCart="delFromCart(index)"
            @incrementItem="incrementItem(index)"
            @decrementItem="decrementItem(index)"
    />
    <div class="cart-buttons flex">
      <div class="total">
        <p class="t16 f400">Итого</p>
        <p class="t30 f600">{{totalPrice}} &#8381</p>
      </div>
      <button @click="sendDataToServer" class="chek btn t12 f600">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/cart/CartItem';
import {mapActions, mapGetters} from 'vuex';
import Notification from '@/components/Notification';

export default {
    name: 'Cart',
    components: {Notification, CartItem},
    props: {
        cart_data: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            messages: []
        };
    },
    computed: {
        ...mapGetters({
            CART: 'CART'
        }),
        totalPrice() {
            let result = [];
            if (this.cart_data.length) {
                for (let item of this.cart_data) {
                    result.push(item.price * item.quantity);
                }
                result = result.reduce((sum, el) => {
                    return sum + el;
                });
                return result;
            } else {
                return 0;
            }
        }
    },
    methods: {
        ...mapActions({
            DEL_FROM_CART: 'DEL_FROM_CART',
            DEL_ALL_FROM_CART: 'DEL_ALL_FROM_CART',
            INCREMENT: 'INCREMENT_ITEM_IN_CART',
            DECREMENT: 'DECREMENT_ITEM_IN_CART'
        }),
        delFromCart(index) {
            this.DEL_FROM_CART(index)
                .then(() => {
                    let timeValue = Date.now().toLocaleString();
                    this.messages.unshift(
                        {name: 'Товар удален из корзины', id: timeValue}
                    );
                });
        },
        delAllFromCart() {
            this.DEL_ALL_FROM_CART();
        },
        incrementItem(index) {
            this.INCREMENT(index);
        },
        decrementItem(index) {
            this.DECREMENT(index);
        },
        sendDataToServer() {
            let body = JSON.stringify(this.CART);
            // Делаем POST запрос на сервер, вкладываем в тело запроса Cart
            fetch('#', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: body,
            }).then((response) => {
                if (response.ok) {
                    // Выполняем код, наример очищаем козину потому что все улетело на сервер.
                    this.delAllFromCart();
                }
            }).catch((err) => {
                console.log(err);
            });
        }
    }

};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.cart {
  &-buttons {
    justify-content: space-between;
    margin-bottom: 10px;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

.quantity {
  @include media-breakpoint-down(sm) {
    margin-bottom: 5px;
  }
}

.clear {
  color: rgba(31, 32, 32, 0.4);

  &:hover {
    color: $primary-color;
    transition: color 0.2s ease-in-out;
  }
}

.chek {
  width: 240px;
  height: 56px;
  @include media-breakpoint-down(xs) {
    width: 100%;
    height: auto;
  }
}

</style>
