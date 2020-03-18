export const state = () => {
  return {
    historyList: [],
    studyDetail: {},
    resetHistoryList: []
  }
}

export const mutations = {
  SET_HISTORY_LIST(state, payload) {
    console.log(payload)
    state.historyList = payload
  },
  SET_STUDY_DETAIL(state, payload) {
    state.studyDetail = payload
  },
  SET_RESET_HISTORY_LIST(state, payload) {
    state.resetHistoryList = payload
  }
}

export const actions = {
  // 학습이력 가져오기
  async getHistoryList({ commit }, param) {
    try {
      const { result } = await this.$axios.$get(
        '/studyAnalytics/history/studyHistList4Reset',
        {
          params: {
            ...param
          }
        }
      )
      if (!result.memberList) {
        commit('SET_HISTORY_LIST', [])
      } else {
        commit('SET_HISTORY_LIST', result.memberList.data)
      }
    } catch (e) {
      return e
    }
  },
  // 학습이력 상세
  async getStudyDetail({ commit }, param) {
    try {
      const { result } = await this.$axios.$get(
        '/studyAnalytics/history/studyHistDetail4Reset',
        {
          params: {
            ...param
          }
        }
      )
      commit('SET_STUDY_DETAIL', result)
    } catch (e) {
      return e
    }
  },
  // 학습이력 초기화 내역
  async getResetHistory({ commit }, param) {
    try {
      const { result } = await this.$axios.$get(
        'studyAnalytics/history/ajaxSelectStdy4ResetHistoryList',
        {
          params: {
            ...param
          }
        }
      )
      if (result.stdy4ResetHistoryList.length >= 1) {
        commit('SET_RESET_HISTORY_LIST', result.stdy4ResetHistoryList)
      } else {
        commit('SET_RESET_HISTORY_LIST', [])
      }
    } catch (e) {
      return e
    }
  },
  // 각 스텝 초기화 하기
  async doResetHistory(context, param) {
    await this.$axios.post('studyAnalytics/history/ajaxDeleteStdy4Reset', param)
  }
}
