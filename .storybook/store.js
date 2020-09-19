import Vuex from 'vuex';

import main from '@/store';
import navigation from '@/store/navigation';

const store = new Vuex.Store({
  ...main,
  modules: {
    navigation: {
      namespaced: true,
      ...navigation,
    }
  }
});

if (store._actions && store._actions.nuxtServerInit) {
  try {
    (async () => {
      await store.dispatch('nuxtServerInit');
    })();
  } catch (err) {
    throw err;
  }
}

export default store;