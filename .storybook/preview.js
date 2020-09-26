import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';

Vue.use(Vuex);

Vue.component(`nuxt-link`, {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    log() {
      action(`link target`)(this.to);
    },
  },
  template: `<a :href="to" @click.prevent="log()"><slot /></a>`,
});

Vue.component(`nuxt`, {
  template: `<router-view />`
});

export const parameters = {
  controls: { expanded: true },
}