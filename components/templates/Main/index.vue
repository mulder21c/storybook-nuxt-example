<template>
  <div>
    <h1>Nuxt - Storybook Example</h1>
    <Navigation
      :list="list"
      :heading-content="headingContent"
      :is-visually-hidden-heading="isVisuallyHiddenHeading"
    />
    <section role="main">
      <h2>메인 섹션</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga dolores
        totam quam tenetur deleniti ad alias quae quidem beatae unde, earum id
        velit eligendi optio debitis cupiditate odio fugiat!
      </p>
    </section>
  </div>
</template>

<script>
import Navigation from '../../organisms/Navigation'

export default {
  components: {
    Navigation
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    headingContent: {
      type: String,
      required: true,
      default: '내비게이션'
    },
    isVisuallyHiddenHeading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
