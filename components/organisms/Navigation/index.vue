<template>
  <nav class="nav">
    <h2 :class="{'--sr-only': isVisuallyHiddenHeading}">
      {{ headingContent }}
    </h2>
    <LinksGroup
      :link-list="list"
      :wrapper="'div'"
      :item-class-name="'nav__list__item'"
      :class="'nav__list'"
    />
  </nav>
</template>

<script>
import LinksGroup from '../../molecules/LinksGroup'

export default {
  components: {
    LinksGroup
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    isVisuallyHiddenHeading: {
      type: Boolean,
      required: false,
      default: false
    },
    headingContent: {
      type: String,
      required: true,
      default: '내비게이션'
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
