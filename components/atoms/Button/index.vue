<template>
  <button
    :type="type"
    :class="[
      `btn`,
      `btn--${context}`,
      {'btn--round-edge': isRoundEdge},
      {'btn--block': isBlock}
    ]"
    :disabled="isDisabled"
  >
    <!-- @slot Button Content -->
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      default: 'button',
      validator: (val) => {
        return ['button', 'submit', 'reset'].includes(val)
      }
    },
    context: {
      type: String,
      required: false,
      default: 'default'
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    isRoundEdge: {
      type: Boolean,
      required: false,
      default: false
    },
    isBlock: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
