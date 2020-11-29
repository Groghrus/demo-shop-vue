<template>
  <div class="notification">
    <transition-group
            name="tr-group"
            class="messages-list"
    >
      <div
              class="content flex"
              v-for="message in messages"
              :key="message.id"
      >
        <p class="content-text t16 ti">{{message.name}}</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
    name: 'Notification',
    props: {
        messages: {
            type: Array,
            default() {
                return [];
            }
        },
        timeout: {
            type: Number,
            default: 3333
        }
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        hideMessage() {
            let vm = this;
            if (this.messages.length) {
                setTimeout(() => {
                    vm.messages.splice(vm.messages.length - 1, 1);
                }, vm.timeout);
            }

        }
    },
    watch: {
        messages() {
            this.hideMessage();
        }
    },
    mounted() {
        this.hideMessage();
    }

};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.notification {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 20;

  .content {
    padding: 15px;
    color: $secondary-color;
    margin-bottom: 15px;
    background: $primary-color;
    border-radius: 4px;
    height: 50px;
  }

}

.tr-group {
  &-enter {
    transform: translateX(120px);
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.6s ease;
  }

  &-enter-to {
    opacity: 1;
  }

  &-leave {
    height: 50px;
    opacity: 1;
  }

  &-leave-active {
    transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
  }

  &-leave-to {
    height: 0;
    transform: translateX(120px);
    opacity: 0;
  }

  &-move {
    transition: transform 0.6s ease;
  }
}

</style>
