// export const state = () => {
//   return {
//     courseList: [],
//     stepList: [],
//     weekList: []
//   }
// }

// export const mutations = {
//   SET_COURSE_LIST(state, payload) {
//     state.courseList = payload
//   }
// }

// export const actions = {
//   async getCourse({ rootState }, param) {
//     console.log(rootState)
//     const { result } = await this.$axios.$get('code/ajaxSelectCodeList', {
//       params: {
//         ...param
//       }
//     })
//     commit('SET_COURSE_LIST', result)

//   }
// }
