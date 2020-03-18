export const state = () => {
  return {
    lessonVideo: [],
    videoDetail: {}
  }
}

export const mutations = {
  SET_LESSON_VIDEO(state, payload) {
    state.lessonVideo = payload
  },
  SET_VIDEO_DETAIL(state, payload) {
    state.videoDetail = payload
  }
}

export const actions = {
  /**
   * 지도동영상 리스트 가져오기
   */
  async getLessonVideo({ commit }, param = {}) {
    const { result } = await this.$axios.$get('/tutorLib/lessonVideoList', {
      params: {
        ...param
      }
    })
    commit('SET_LESSON_VIDEO', result.list.data)
  },
  /**
   * 지도동영상 등록
   */
  async uploadFiles({ commit }, param) {
    try {
      const {
        presenter,
        presentDt,
        planSeriesDtlCd,
        planSeriesCourse,
        planSeriesStep,
        title,
        fileData,
        token
      } = param

      const formData = new FormData()
      formData.append('presenter', presenter)
      formData.append('presentDt', presentDt)
      formData.append('planSeriesDtlCd', planSeriesDtlCd)
      formData.append('planSeriesCourse', planSeriesCourse)
      formData.append('planSeriesStep', planSeriesStep)
      formData.append('title', title)
      formData.append('stdAssistFile', fileData[0])
      const { result } = await this.$axios.post(
        '/tutorLib/lessonVideoInsert',
        formData,
        token
      )
      commit('SET_LESSON_VIDEO', result.list.data)
    } catch (e) {
      return e
    }
  },
  /**
   * 지도동영상 상세정보
   */
  async getMediaDetail({ commit }, param = {}) {
    const { result } = await this.$axios.$get('/tutorLib/lessonVideoDetail', {
      params: {
        ...param
      }
    })
    commit('SET_VIDEO_DETAIL', result.data)
  },
  /**
   * 지도동영상 삭제
   */
  async delDetail(context, param) {
    try {
      await this.$axios.$post('/tutorLib/lessonVideoDelete', param)
    } catch (e) {
      return e
    }
  },
  /**
   * 지도동영상 수정
   */
  async modifyDetail(context, param) {
    try {
      const {
        presenter,
        presentDt,
        planSeriesDtlCd,
        planSeriesCourse,
        planSeriesStep,
        title,
        fileData,
        token,
        stdAssistSeq
      } = param

      const formData = new FormData()
      formData.append('presenter', presenter)
      formData.append('presentDt', presentDt)
      formData.append('planSeriesDtlCd', planSeriesDtlCd)
      formData.append('planSeriesCourse', planSeriesCourse)
      formData.append('planSeriesStep', planSeriesStep)
      formData.append('title', title)
      formData.append('stdAssistFile', fileData[0])
      formData.append('stdAssistSeq', stdAssistSeq)
      await this.$axios.post('/tutorLib/lessonVideoUpdate', formData, token)
    } catch (e) {
      return e
    }
  }
}
