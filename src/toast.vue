<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot><!--不使用html写法时使用vue写法-->
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 50
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭', callback: undefined
        }
      }
    },
    enableHtml: {
      type: Boolean,
      default: false
    }
  },
  created() {
  },
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
            `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    log() {
      console.log('测试')
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)//this === toast实例
      }
    }
  }
}
</script>
<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  font-size: $font-size;
  height: $toast-min-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  color: white; align-items: center; background: $toast-bg; border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .close {
    cursor:pointer;
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>