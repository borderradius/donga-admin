<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      레벨테스트 현황조회
    </h2>
    <div slot="content-container">
      <SearchBox @search="search">
        <tr slot="search-condition1">
          <th class="border border-l-0 px-4 py-2 w-100">날짜</th>
          <td class="border border-l-0 px-4 py-2 overflow-hidden">
            <Select
              v-model="searchParam.srchYy"
              :option-data="srchYyData"
              default-value="0"
              default-name="년도선택"
              option-name-key="year"
              option-value-key="year"
              class="w-140 mr-1 float-left"
            />
            <Select
              v-model="searchParam.srchMm"
              :option-data="srchMmData"
              default-value="0"
              default-name="월선택"
              option-name-key="month"
              option-value-key="month"
              class="w-140 float-left"
              @change="selectChange"
            />
          </td>
          <th class="w-100 border border-l-0 px-4 py-2">검색타입</th>
          <td class="border border-l-0 px-4 py-2 border-r-0 overflow-hidden">
            <Select
              v-model="searchParam.srchTp"
              :option-data="srchTpData"
              default-value="0"
              default-name="검색타입"
              option-name-key="type"
              option-value-key="value"
              class="w-140 mr-1 float-left"
            />
            <Input
              id="searchText"
              v-model="searchParam.srchText"
              type="text"
              placeholder="검색어를 입력해주세요."
              class="w-140 float-left"
              @inputEnter="search"
            />
          </td>
        </tr>
      </SearchBox>

      <Grid
        ref="tuiGrid"
        :key="gridProps.randomKey"
        :data="levelTestList"
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
      <!-- @click="onClick"
        @check="onCheck"
        @uncheck="onUnCheck" -->
    </div>
  </ContentCard>
</template>

<script>
import { mapState } from 'vuex'
import { columns, rowHeaders, columnOptions } from '~/static/tuiData/levelTest'

export default {
  data() {
    return {
      gridProps: {},
      searchParam: {
        srchYy: '',
        srchMm: '',
        srchTp: '',
        srchText: '99900041'
      },
      srchYyData: [
        {
          year: '2019'
        }
      ],
      srchMmData: [
        {
          month: '12'
        },
        {
          month: '11'
        },
        {
          month: '10'
        },
        {
          month: '09'
        },
        {
          month: '08'
        }
      ],
      srchTpData: [
        {
          type: '응시자',
          value: '1'
        },
        {
          type: '교사사번',
          value: '2'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      levelTestList: (state) => state.memberMgr.levelTest.levelTestList
    })
  },
  watch: {
    levelTestList() {
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
      try {
        await this.$store.dispatch(
          'memberMgr/levelTest/getLevelTest',
          this.searchParam
        )
      } catch (e) {
        alert(e)
      }
    },
    selectChange() {
      console.log('컴포넌트에서 보내준 change evt')
    },
    getKey(e) {
      const rowData = this.$refs.tuiGrid.data
      return rowData[e.rowKey].aplctId
    },
    async onClick(e) {
      /**
       * delKey로 삭제api 콜
       */
      if (e.columnName === 'delete') {
        this.searchParam.delKey = this.getKey(e)
        try {
          await this.$store.dispatch(
            'memberMgr/levelTest/delLevelTest',
            this.searchParam
          )
        } catch (error) {
          alert(error)
        }
      }
      /**
       * 시험지결과보기 api 콜
       */
      if (e.columnName === 'test') {
        const { result } = await this.$axios.$get(
          'studyAnalytics/activities/ajaxOpenTestResultPaper',
          {
            params: {
              aplctId: this.getKey(e),
              stdTstTp: 'L'
            }
          }
        )

        window.open(
          result.paperUrl,
          '_blank',
          `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, width=auto, height=auto, left=0 top=0`
        )
      }
      /**
       * 진단서보기 api 콜
       */
      if (e.columnName === 'result') {
        this.$router.push({
          name: `${this.$route.name}-diagnosis`,
          params: { aplctId: this.getKey(e) }
        })
      }
    }
  }
}
</script>
