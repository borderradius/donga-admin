export const state = () => {
  return {
    // courseList: [],
    // stepList: [],
    // weekList: [],
    memberList: [],
    testList: [],
    searchCondition: {}
  }
}

export const mutations = {
  // SET_COURSE(state, payload) {
  //   state.courseList = payload
  // },
  // SET_STEP(state, payload) {
  //   state.stepList = payload
  // },
  // SET_WEEK(state, payload) {
  //   state.weekList = payload
  // },
  SET_MEMBER_LIST(state, payload) {
    state.memberList = payload
  },
  SET_TEST_LIST(state, payload) {
    state.testList = payload
  },
  SET_SEARCH_CONDITION(state, payload) {
    state.searchCondition = payload
  }
}

export const actions = {
  // 검색조건 리스트 가져오기
  // async getSelectCodeList({ commit }, param) {
  //   try {
  //     const { result } = await this.$axios.$get('/code/ajaxSelectCodeList', {
  //       params: {
  //         ...param
  //       }
  //     })
  //     if (param.upCd === 'EBP_COURSE') commit('SET_COURSE', result)
  //     if (param.upCd === 'EBP_STEP') commit('SET_STEP', result)
  //     if (param.upCd === 'EBP_WEEK') commit('SET_WEEK', result)
  //   } catch (e) {
  //     return e
  //   }
  // },
  // 데이터 검색
  async getMemberList({ commit }, param) {
    try {
      const { result } = await this.$axios.$get(
        '/studyAnalytics/activities/stdUserScoreList',
        {
          params: {
            ...param
          }
        }
      )
      if (!result.legacyStdUserList) {
        commit('SET_MEMBER_LIST', [])
      } else {
        commit('SET_MEMBER_LIST', result.legacyStdUserList.data)
      }
    } catch (e) {
      return e
    }
  },
  // 회원성적 리스트
  async getTestList({ commit }, param) {
    try {
      const { result } = await this.$axios.$get(
        '/studyAnalytics/activities/stdUserScoreDetail',
        {
          params: {
            ...param
          }
        }
      )
      commit('SET_TEST_LIST', result.stdPrgsList)
      commit('SET_SEARCH_CONDITION', result.search)
    } catch (e) {
      return e
    }
  },
  // 회원성적 초기화
  async resetTest(context, param) {
    try {
      await this.$axios.$post(
        '/studyAnalytics/activities/ajaxDeleteStudyTestRst',
        param
      )
    } catch (e) {
      return e
    }
  }
}
