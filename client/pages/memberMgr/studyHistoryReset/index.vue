<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      학습이력 초기화
    </h2>
    <div slot="content-container">
      <SearchBox @search="search">
        <tr slot="search-condition1">
          <th class="border border-l-0 px-4 py-2 w-100">상품</th>
          <td class="border border-l-0 px-4 py-2 overflow-hidden">
            <Select
              v-model="searchParam.srchProdCd"
              :option-data="srchProdOptions"
              default-value="0"
              default-name="교재구분선택"
              option-name-key="label"
              option-value-key="value"
              class="float-left w-140 mr-1"
            />
            <Select
              v-model="searchParam.srchStdCourse"
              :option-data="COURSE_LIST"
              default-value="0"
              default-name="전체상품선택"
              option-name-key="label"
              option-value-key="value"
              class="float-left w-160 mr-1"
            />
          </td>
          <th class="border border-l-0 px-4 py-2 w-100">회원타입</th>
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

      <!-- <Grid
        ref="tuiGrid"
        :key="gridProps.randomKey"
        :data="historyList"
        :columns="gridProps.columns"
        :scroll-x="false"
        :scroll-y="false"
        :column-options="gridProps.columnOptions"
        :row-headers="gridProps.rowHeaders"
        :page-options="gridProps.pageOptions"
        :header="gridProps.header"
        class="px-2"
        @click="onClick"
      /> -->
    </div>
  </ContentCard>
</template>

<script>
import { mapState } from 'vuex'
import {
  columns,
  rowHeaders,
  columnOptions
} from '~/static/tuiData/studyHistoryReset'
import { COURSE_LIST, USER_SEARCH_TYPE } from '~/static/constants'

export default {
  data() {
    return {
      searchParam: {
        srchProdCd: '',
        srchStdCourse: '',
        srchUserTp: '',
        srchText: ''
      },
      date: '',
      srchProdOptions: [{ label: 'EBP', value: 'EBP', selected: true }],
      COURSE_LIST,
      USER_SEARCH_TYPE
    }
  },
  computed: {
    ...mapState({
      historyList: (state) => state.memberMgr.studyHistoryReset.historyList
    })
  },
  watch: {
    historyList() {
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
    async search() {
      await this.$store.dispatch('memberMgr/studyHistoryReset/getHistoryList', {
        selectCd: this.searchParam.srchProdCd,
        selectCdDtl: this.searchParam.srchStdCourse,
        selectTp: this.searchParam.srchUserTp,
        searchText: this.searchParam.srchText
      })
    },
    onClick(e) {
      if (e.rowKey >= '0') {
        const uniqueKey = this.$refs.tuiGrid.data[e.rowKey].uniqueKey
        const {
          branchNm,
          guideSts,
          memNo,
          memNm,
          memLoginId,
          productNm
        } = e.instance.getRow(uniqueKey)
        const param = {
          branchNm,
          guideSts,
          memNo,
          memNm,
          memLoginId,
          productNm
        }

        this.$router.push({
          name: `${this.$route.name}-detail`,
          params: param
        })
      }
    }
  }
}
</script>
