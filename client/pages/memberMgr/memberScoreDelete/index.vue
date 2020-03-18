<template>
  <ContentCard>
    <h2 slot="content-title">
      회원성적 삭제
    </h2>
    <div slot="content-container">
      <Tabs :tab-header="tabHeader">
        <div slot="tab-container-0">EBB 회원성적 삭제</div>
        <div slot="tab-container-1">
          <SearchBox @search="search">
            <tr slot="search-condition1">
              <th class="border border-l-0 px-4 py-2 w-100">코스</th>
              <td class="border border-l-0 px-4 py-2 overflow-hidden">
                <Select
                  v-model="searchParam.srchStdCourse"
                  :option-data="COURSE_LIST"
                  default-value="0"
                  default-name="코스선택"
                  option-name-key="label"
                  option-value-key="value"
                  class="float-left w-140 mr-1"
                />

                <Select
                  v-model="searchParam.srchTestTp"
                  :option-data="srchTestTpList"
                  default-value="0"
                  default-name="시험성적조건"
                  option-name-key="label"
                  option-value-key="value"
                  class="float-left w-140"
                />
              </td>
              <th class="border border-l-0 px-4 py-2 w-100">검색조건</th>
              <td class="border border-l-0 px-4 py-2 overflow-hidden">
                <Select
                  v-model="searchParam.srchUserTp"
                  :option-data="USER_SEARCH_TYPE"
                  default-value="X"
                  default-name="회원검색타입"
                  option-name-key="label"
                  option-value-key="value"
                  class="float-left w-140 mr-1"
                />
                <Input
                  id="searchText"
                  v-model="searchParam.srchText"
                  type="text"
                  placeholder="검색어를 입력해주세요."
                  class="float-left"
                  @inputEnter="search"
                />
              </td>
            </tr>
          </SearchBox>

          <Grid
            ref="tuiGrid"
            :key="gridProps.randomKey"
            :data="memberList"
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
        <div slot="tab-container-2">EX 회원성적 삭제</div>
      </Tabs>
    </div>
  </ContentCard>
</template>

<script>
import { mapState } from 'vuex'
import {
  columns,
  rowHeaders,
  columnOptions
} from '~/static/tuiData/memberScoreDelete'
import { COURSE_LIST, USER_SEARCH_TYPE } from '~/static/constants'

export default {
  data() {
    return {
      tabHeader: ['EBB 회원성적 삭제', 'EBP 회원성적 삭제', 'EX 회원성적 삭제'],
      searchParam: {
        srchProdCd: 'EBP',
        srchStdCourse: '',
        srchTestTp: '',
        srchUserTp: '',
        srchText: ''
      },
      COURSE_LIST,
      USER_SEARCH_TYPE
    }
  },
  computed: {
    ...mapState({
      memberList: (state) => state.memberMgr.memberScoreDelete.memberList
    }),
    srchTestTpList() {
      return [
        { label: '주간', value: 'W' },
        { label: '월간', value: 'M' }
      ]
    }
  },
  watch: {
    memberList() {
      this.gridProps.randomKey = this.randomKey()
    }
  },
  beforeMount() {
    this.gridProps = {
      columns,
      rowHeaders,
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
    // 상세페이지 이동
    onClick(e) {
      if (e.rowKey >= '0') {
        const uniqueKey = this.$refs.tuiGrid.data[e.rowKey].uniqueKey
        const param = e.instance.getRow(uniqueKey)
        param.srchStdCourse = this.searchParam.srchStdCourse
        this.$router.push({
          name: `${this.$route.name}-detail`,
          params: param
        })
      }
    },
    // 검색
    async search() {
      await this.$store.dispatch(
        'memberMgr/memberScoreDelete/getMemberList',
        this.searchParam
      )
    }
  }
}
</script>
