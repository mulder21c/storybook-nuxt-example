<template>
  <component :is="wrapper">
    <nuxt-link
      v-for="(nav, index) in linkList"
      :key="index"
      :to="nav.path"
      :class="linkClassName"
    >
      {{ nav.label }}
    </nuxt-link>
  </component>
</template>

<script>
export default {
  props: {
    linkList: {
      type: Array,
      required: true,
      default: () => []
    },
    wrapper: {
      type: String,
      required: false,
      default: 'div',
      validator: (value) => {
        return ['div', 'nav'].includes(value)
      }
    },
    linkClassName: {
      type: String,
      required: false,
      default: 'link'
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
