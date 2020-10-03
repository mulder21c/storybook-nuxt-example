<template>
  <div>
    <p
      :class="[
        'text-box',
        fontSize ? `text-box--${fontSize}` : '',
        fontWeight ? `text-box--${fontWeight}` : ''
      ]"
    >
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: false,
      default: ''
    },
    fontSize: {
      type: String,
      required: false,
      default: 'base'
    },
    fontWeight: {
      type: String,
      required: false,
      default: 'regular'
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
