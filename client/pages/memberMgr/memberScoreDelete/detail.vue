<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      회원성적 삭제 상세
    </h2>
    <div slot="content-container">
      <SearchBox @search="search">
        <tr slot="search-condition1">
          <th class="border border-l-0 px-4 py-2 w-100">년도</th>
          <td class="border border-l-0 px-4 py-2 overflow-hidden">
            <Select
              v-model="searchParam.srchYy"
              :option-data="yearOptions"
              default-value="0"
              default-name="년도선택"
              option-name-key="year"
              option-value-key="year"
              class="float-left w-140 mr-1"
            />
          </td>
          <th class="border border-l-0 px-4 py-2 w-100">코스</th>
          <td class="border border-l-0 px-4 py-2 overflow-hidden">
            <Select
              v-model="searchParam.srchStdCourse"
              :option-data="COURSE_LIST"
              default-value="0"
              default-name="Course전체선택"
              option-name-key="label"
              option-value-key="value"
              class="float-left w-160 mr-1"
            />
            <Select
              v-model="searchParam.srchStdStep"
              :option-data="STEP_LIST"
              default-value="0"
              default-name="Step전체선택"
              option-name-key="label"
              option-value-key="value"
              class="float-left w-140 mr-1"
            />
            <Select
              v-model="searchParam.srchStdWeek"
              :option-data="WEEK_LIST"
              default-value="0"
              default-name="Week전체선택"
              option-name-key="label"
              option-value-key="value"
              class="float-left w-140 mr-1"
            />
          </td>
        </tr>
      </SearchBox>

      <Grid
        ref="tuiGrid"
        :key="gridProps.randomKey"
        :data="testList"
        :columns="gridProps.columns"
        :scroll-x="false"
        :scroll-y="false"
        :column-options="gridProps.columnOptions"
        :row-headers="gridProps.rowHeaders"
        :page-options="gridProps.pageOptions"
        :header="gridProps.header"
        class="px-2"
        @click="onClick"
      />
    </div>
  </ContentCard>
</template>

<script>
import { mapState } from 'vuex'
import {
  columns,
  columnOptions
} from '~/static/tuiData/memberScoreDeleteDetail'
import { COURSE_LIST, STEP_LIST, WEEK_LIST } from '~/static/constants'

export default {
  async asyncData({ store, route }) {
    // 검색조건 리스트 가져오기
    // await store.dispatch('memberMgr/memberScoreDelete/getSelectCodeList', {
    //   upCd: 'EBP_COURSE'
    // })
    // await store.dispatch('memberMgr/memberScoreDelete/getSelectCodeList', {
    //   upCd: 'EBP_STEP'
    // })
    // await store.dispatch('memberMgr/memberScoreDelete/getSelectCodeList', {
    //   upCd: 'EBP_WEEK'
    // })
    await store.dispatch('memberMgr/memberScoreDelete/getTestList', {
      memNo: route.params.memNo,
      memNm: route.params.memNm,
      memLoginId: route.params.memLoginId,
      productNm: route.params.productNm
    })
  },
  data() {
    return {
      searchParam: {
        srchProdCd: 'EBP',
        srchYy: '2020',
        srchStdCourse: '',
        srchStdStep: '',
        srchStdWeek: ''
      },
      yearOptions: [{ year: '2019' }, { year: '2020' }],
      COURSE_LIST,
      STEP_LIST,
      WEEK_LIST
    }
  },
  computed: {
    ...mapState({
      // courseList: (state) => state.memberMgr.memberScoreDelete.courseList,
      // stepList: (state) => state.memberMgr.memberScoreDelete.stepList,
      // weekList: (state) => state.memberMgr.memberScoreDelete.weekList,
      testList: (state) => state.memberMgr.memberScoreDelete.testList,
      searchCondition: (state) =>
        state.memberMgr.memberScoreDelete.searchCondition
    })
  },
  watch: {
    testList() {
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
    async search() {
      const params = this.$route.params
      this.searchParam.memNo = params.memNo
      this.searchParam.memNm = params.memNm
      this.searchParam.memLoginId = params.memLoginId
      await this.$store.dispatch(
        'memberMgr/memberScoreDelete/getTestList',
        this.searchParam
      )
    },
    getKey(e) {
      const rowData = this.$refs.tuiGrid.data
      return rowData[e.rowKey].aplctId
    },
    async onClick(e) {
      if (e.columnName === 'test') {
        alert('시험지 링크 새창으로 띄우기')
        // this.searchParam.delKey = this.getKey(e)
        // try {
        //   await this.$store.dispatch(
        //     'memberMgr/levelTest/delLevelTest',
        //     this.searchParam
        //   )
        // } catch (error) {
        //   alert(error)
        // }
      }
      if (e.columnName === 'reset') {
        if (confirm('초기화 하시겠습니까?')) {
          try {
            await this.$store.dispatch(
              'memberMgr/memberScoreDelete/resetTest',
              {
                memId: this.searchCondition.srchMemBid,
                tstCd: this.getKey(e)
              }
            )
            await this.$store.dispatch(
              'memberMgr/memberScoreDelete/getTestList',
              this.searchParam
            )
          } catch (error) {
            alert(error)
          }
        }
      }
    }
  }
}
</script>
