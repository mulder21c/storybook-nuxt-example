import Vue from 'vue';
import { action } from '@storybook/addon-actions';

Vue.component('nuxt-link', {
  props: [`to`],
  methods: {
    log() {
      action(`link target`)(this.to);
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot /></a>',
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
}