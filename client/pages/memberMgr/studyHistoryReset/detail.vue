<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      학습이력 상세
    </h2>
    <div slot="content-container">
      <div class="mb-8">
        <div class="w-full mx-auto">
          <div class="bg-white shadow rounded">
            <table class="table-basic">
              <thead>
                <tr>
                  <th rowspan="2">판매지점</th>
                  <th rowspan="2">지도상태</th>
                  <th rowspan="2">회원번호</th>
                  <th rowspan="2">회원명</th>
                  <th rowspan="2">아이디</th>
                  <th rowspan="2">상품</th>
                  <th rowspan="2">코스</th>
                  <th colspan="6">학습이력 초기화</th>
                </tr>
                <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ studyDetail.memberIn.branchNm }}</td>
                  <td>{{ studyDetail.memberIn.guideSts }}</td>
                  <td>{{ studyDetail.memberIn.memNo }}</td>
                  <td>{{ studyDetail.memberIn.memNm }}</td>
                  <td>{{ studyDetail.memberIn.memLoginId }}</td>
                  <td>{{ studyDetail.memberIn.productCd }}</td>
                  <td>{{ studyDetail.memberIn.productCrs }}</td>
                  <td v-for="index in 6" :key="index">
                    <div
                      v-if="
                        studyDetail.resultPage[0][`stdStep${index}`] === 'Y'
                      "
                    >
                      <button
                        class="btn btn-info btn-sm"
                        @click="doReset(index)"
                      >
                        리셋
                      </button>
                    </div>
                    <div v-else>-</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Grid
        ref="tuiGrid"
        :key="gridProps.randomKey"
        :data="resetHistoryList"
        :columns="gridProps.columns"
        :scroll-x="false"
        :scroll-y="false"
        :column-options="gridProps.columnOptions"
        :row-headers="gridProps.rowHeaders"
        :page-options="gridProps.pageOptions"
        :header="gridProps.header"
        class="px-2"
      />
    </div>
  </ContentCard>
</template>

<script>
import { mapState } from 'vuex'
import {
  columns,
  columnOptions
} from '~/static/tuiData/studyHistoryResetDetail'

export default {
  async asyncData({ store, route }) {
    await store.dispatch(
      'memberMgr/studyHistoryReset/getStudyDetail',
      route.params
    )
    await store.dispatch('memberMgr/studyHistoryReset/getResetHistory', {
      boardId: 'BRD_SAR',
      boardTp: 'BRD_SAR01',
      memNo: route.params.memNo
    })
  },
  computed: {
    ...mapState({
      studyDetail: (state) => state.memberMgr.studyHistoryReset.studyDetail,
      resetHistoryList: (state) =>
        state.memberMgr.studyHistoryReset.resetHistoryList
    })
  },
  watch: {
    resetHistoryList() {
      this.gridProps.randomKey = this.randomKey()
    }
  },

  beforeMount() {
    this.gridProps = {
      columns,
      pageOptions: {
        perPage: 10,
        useClient: true
      },
      columnOptions,
      header: {
        align: 'left'
      }
    }
  },
  methods: {
    randomKey() {
      const rand = parseInt(Math.random() * 100000) + 1
      return rand
    },
    doReset(idx) {
      const profile = this.studyDetail.profile
      const memberIn = this.studyDetail.memberIn
      const param = {
        memNo: profile.memNo,
        memLoginId: profile.memId,
        memId: profile.memBid,
        memNm: profile.memNm,
        // memBid: profile.memBid,
        prodCd: memberIn.productCd,
        stdCourse: memberIn.productCrs,
        stdStep: idx
      }
      this.$store.dispatch('memberMgr/studyHistoryReset/doResetHistory', param)
    }
  }
}
</script>
