<template>
  <ContentCard>
    <h2 slot="content-title">
      비밀번호 초기화
    </h2>
    <div slot="content-container">
      <Tabs :tab-header="tabHeader">
        <div slot="tab-container-0">
          <dl class="flex items-center">
            <dt>{{ profile.memNm }}, {{ profile.memId }}</dt>
            <dd class="ml-2">
              <label class="inline-block">
                <input
                  type="text"
                  class="form-input inline-block form-input-sm w-full"
                  placeholder="변경사유를 입력하세요."
                />
              </label>
              <button class="btn btn-sm">비밀번호 초기화</button>
            </dd>
          </dl>
          <table class="w-full text-left mb-12">
            <thead class="border-b border-gray-400">
              <tr>
                <th>no</th>
                <th>변경사유</th>
                <th>변경일시</th>
                <th>관리자ID</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!resetMemberPwList.length">
                <td colspan="4">no data</td>
              </tr>
              <tr v-for="item in resetMemberPwList" v-else :key="item.rnumI">
                <td>{{ item.rnumI }}</td>
                <td>
                  {{ item.content }}
                  <button
                    class="text-red-400"
                    @click="delHistory(item.cmmntNo)"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'trash-alt']"
                      class="text-xs mx-1"
                    />
                  </button>
                </td>
                <td>{{ item.creDTime }}</td>
                <td>{{ item.writer }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div slot="tab-container-1">
          <table class="w-full text-left mb-12">
            <thead class="border-b border-gray-400">
              <tr>
                <th>학습회원ID</th>
                <th>학부모ID</th>
                <th>변경사유</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ profile.memNm }}, {{ profile.memId }}</td>
                <td>학부모아이디</td>
                <td>
                  <input
                    type="text"
                    class="form-input block form-input-sm w-full"
                    placeholder="변경사유를 입력하세요."
                  />
                </td>
                <td>
                  학부모있으면
                  <button class="btn btn-sm">비밀번호 초기화</button> 없으면 -
                </td>
              </tr>
            </tbody>
          </table>
          <table class="w-full text-left mb-12">
            <thead class="border-b border-gray-400">
              <tr>
                <th>no</th>
                <th>변경사유</th>
                <th>변경일시</th>
                <th>관리자ID</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!resetParentPwList.length">
                <td colspan="4">no data</td>
              </tr>
              <tr v-for="item in resetParentPwList" v-else :key="item.rnumI">
                <td>{{ item.rnumI }}</td>
                <td>
                  {{ item.content
                  }}<button
                    class="text-red-400"
                    @click="delHistory(item.cmmntNo)"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'trash-alt']"
                      class="text-xs mx-1"
                    />
                  </button>
                </td>
                <td>{{ item.creDTime }}</td>
                <td>{{ item.writer }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Tabs>
    </div>
  </ContentCard>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async asyncData({ store }) {
    await store.dispatch('memberMgr/memberMgr/getResetList', {
      memNm: store.state.memberMgr.memberMgr.memberDetail.profile.memNm,
      memNo: store.state.memberMgr.memberMgr.memberDetail.profile.memNo,
      memLoginId: store.state.memberMgr.memberMgr.memberDetail.profile.memId
    })
  },
  data() {
    return {
      tabHeader: []
    }
  },
  computed: {
    ...mapState({
      profile: (state) => state.memberMgr.memberMgr.memberDetail.profile,
      resetMemberPwList: (state) => state.memberMgr.memberMgr.resetMemberPwList,
      resetParentPwList: (state) => state.memberMgr.memberMgr.resetParentPwList
    })
  },

  created() {
    this.tabHeader = ['학습회원 비밀번호 초기화', '학부모회원 비밀번호 초기화']
  },
  methods: {
    async delHistory(cmmntNo) {
      try {
        await this.$store.dispatch('memberMgr/memberMgr/delHistory', cmmntNo)
        await this.$store.dispatch('memberMgr/memberMgr/getResetList', {
          memNm: this.profile.memNm,
          memNo: this.profile.memNo,
          memLoginId: this.profile.memId
        })
        alert('삭제성공')
      } catch (e) {
        alert('삭제실패')
      }
    }
  }
}
</script>
