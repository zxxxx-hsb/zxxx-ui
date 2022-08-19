<template>
  <div class="zx-button-wrap"
  :class="disabled?'disabled':''">
    <button
      @click="handleClick"
      :disabled="disabled"
      :type="nativeType"
      :class="[
      type ? 'zx-button-' + type : '',
      disabled?'disabled':''
      ]"
      >
      <span><slot></slot></span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'zx-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: Boolean,
    // disabled: Boolean,
    // round: Boolean,
    // circle: Boolean
  },
  data() {
    return {

    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "./css/button.scss";
</style>