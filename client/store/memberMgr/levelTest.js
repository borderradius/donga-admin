export const state = () => {
  return {
    levelTestList: [],
    diagnosis: {}
  }
}

export const mutations = {
  SET_LEVEL_TEST_LIST(state, payload) {
    state.levelTestList = payload
  },
  SET_DIAGNOSIS(state, payload) {
    state.diagnosis = payload
  }
}

export const actions = {
  /**
   * 레벨테스트 리스트 가져오기
   */
  async getLevelTest({ commit }, param) {
    const { result } = await this.$axios.$get(
      'studyAnalytics/activities/levelTestList',
      {
        params: param
      }
    )
    commit('SET_LEVEL_TEST_LIST', result.lvlTestRstLst)
  },
  /**
   * 테스트정보 삭제
   */
  async delLevelTest({ dispatch }, param) {
    try {
      await this.$axios.post('studyAnalytics/activities/ajaxDeleLevelTest', {
        aplctId: param.delKey
      })
    } catch (e) {
      return e
    }
    await dispatch('getLevelTest', param)
  },
  /**
   * 진단서 정보 가져오기
   */
  async getDiagnosis({ commit }, param) {
    const { result } = await this.$axios.$get(
      'studyAnalytics/activities/levelTestAnalyticsRpt',
      {
        params: { ...param }
      }
    )
    commit('SET_DIAGNOSIS', result.studyStat)
  }
}
