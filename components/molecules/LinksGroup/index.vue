<template>
  <div>
    <nuxt-link v-for="(nav, index) in navList" :key="index" :to="nav.path" class="link">
      {{ nav.label }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
