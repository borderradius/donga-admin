const getDefaultState = () => ({
  textbookList: [],
  memberList: [],
  memberDetail: {},
  contract: [],
  contractList: [],
  resetMemberPwList: [],
  resetParentPwList: []
})

export const state = () => getDefaultState()

export const getters = {
  GET_CONTRACT_LIST(state) {
    return state.contractList
  },
  GET_MEMBER_DETAIL(state) {
    return state.memberDetail
  },
  GET_CONTRACT_PARAM(state) {
    const detail = state.memberDetail
    const iter = detail.contractSEQList
    const param = []
    for (const a of iter) {
      param.push({
        iMemNo: detail.memberIn.memNo,
        iSeqNo: a.contractSeq,
        iGbn: a.gbn
      })
    }
    return param
  }
}

export const mutations = {
  SET_TEXTBOOK_LIST(state, payload) {
    state.textbookList = payload
  },
  SET_MEMBER_LIST(state, payload) {
    state.memberList = payload
  },
  SET_CONTRACT(state, payload) {
    state.contractList[payload.seq - 1] = payload
  },
  SET_CONTRACT_LIST(state, payload) {
    state.contractList[payload.seq - 1] = payload
  },
  SET_MEMBER_DETAIL(state, payload) {
    state.memberDetail = payload
  },
  SET_RESET_MEMBER_PW_LIST(state, payload) {
    state.resetMemberPwList = payload
  },
  SET_RESET_PARENT_PW_LIST(state, payload) {
    state.resetParentPwList = payload
  }
}

export const actions = {
  /**
   * 검색조건 - 교재구분리스트 가져오기
   */
  async getTextbookList({ commit }, param) {
    try {
      const { result } = await this.$axios.$get(
        `code/ajaxSelectCodeList?upCd=${param}`
      )
      commit('SET_TEXTBOOK_LIST', result)
    } catch (e) {
      return e
    }
  },
  /**
   * 검색
   */
  async search({ commit }, param) {
    try {
      const { result } = await this.$axios.$get(
        '/studentMgr/member/memberList',
        {
          params: {
            ...param
          }
        }
      )
      commit('SET_MEMBER_LIST', result.memberList.data)
    } catch (e) {
      return e
    }
  },
  /**
   * 학생정보 가져오기
   */
  async getDetailMember({ commit }, param) {
    try {
      const { result } = await this.$axios.$get(
        '/studentMgr/member/memberDetail',
        {
          params: {
            ...param
          }
        }
      )
      commit('SET_MEMBER_DETAIL', result)
    } catch (e) {
      return e
    }
  },
  /**
   * 학생계약정보 가져오기
   */
  async getContract({ commit }, param) {
    try {
      const { result } = await this.$axios.$get(
        '/studentMgr/member/ajaxSelectContractDetail4SEQ',
        {
          params: {
            ...param
          }
        }
      )
      result.seq = param.iSeqNo
      commit('SET_CONTRACT', result)
    } catch (e) {
      return e
    }
  },
  /**
   * 리스트->상세페이지 이동시 계약정보 가져오기
   * getContract로 하나씩 계약정보 가져올 때 리렌더링 안되는 이슈로 인해 만든 메서드..
   * */
  async getContractOnce({ dispatch }) {
    try {
      const param = this.getters['memberMgr/memberMgr/GET_CONTRACT_PARAM']
      for (const a of param) {
        await dispatch('getContract', a)
      }
    } catch (e) {
      return e
    }
  },
  /**
   * 학습회원 비밀번호 초기화
   * 아직 api 기능안됌.
   */
  async resetMemPw(context, param) {
    try {
      await this.$axios.post('/studentMgr/member/ajaxInsertComment', param)
    } catch (e) {
      return e
    }
  },
  /**
   * 초기화 내역리스트 가져오기
   */
  async getResetList({ commit }, params) {
    const { result } = await this.$axios.$get(
      '/studentMgr/member/resetPassword',
      {
        params
      }
    )
    console.warn('비번초기화 리스트 : ', result)
    commit('SET_RESET_MEMBER_PW_LIST', result.resetCmmntHistoryList.data)
    commit('SET_RESET_PARENT_PW_LIST', result.resetParentCmmntHistoryList.data)
  },
  /**
   * 초기화 내역 개별삭제
   */
  async delHistory(context, cmmntNo) {
    try {
      await this.$axios.post('/studentMgr/member/ajaxDeleteComment', {
        cmmntNo
      })
    } catch (e) {
      return e
    }
  }
}
