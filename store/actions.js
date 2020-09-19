const actions = {
  nuxtServerInit ({ commit }) {
    const list = [
      {
        path: '/',
        label: 'Home'
      },
      {
        path: '/sub-1',
        label: '서브 1'
      },
      {
        path: '/sub-2',
        label: '서브 2'
      }
    ]
    const mainNavHeading = '메인 내비게이션'

    return new Promise((resolve, reject) => {
      commit('navigation/SET_MAIN_NAV_LIST', list)
      commit('navigation/SET_MAIN_NAV_HEADDING', mainNavHeading)
      resolve()
    })
  }
}

export default actions
