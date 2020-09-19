<template>
  <mainTemplate :list="mainNavList" :heading-content="mainNavHeading" :is-visually-hidden-heading="true" />
</template>

<script>
import { mapGetters } from 'vuex'
import mainTemplate from '../components/templates/Main'

export default {
  layout: 'default',
  components: {
    mainTemplate
  },
  computed: {
    ...mapGetters('navigation', ['mainNavList', 'mainNavHeading'])
  }
}
</script>
