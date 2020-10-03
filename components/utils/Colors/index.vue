<template>
  <div :class="['palette', color ? `palette${color}` : '']">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div class="rect-angles">
      <div class="rect-angle rect-angle--small" />
      <div class="rect-angle rect-angle--medium" />
      <div class="rect-angle rect-angle--large" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
