export const state = () => {
  return {
    lists: []
  }
}
export const mutations = {
  SET_LISTS(state, payload) {
    state.lists = Object.freeze(payload)
  }
}

export const actions = {
  async lists({ commit }) {
    const { data } = await this.$axios.get('contents/list')
    commit('SET_LISTS', data.result)
  }
}
