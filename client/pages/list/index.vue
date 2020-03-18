<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      전체멤버
    </h2>
    <div slot="content-container">
      <SearchBox @search="search">
        <tr slot="search-condition1">
          <th class="border border-l-0 px-4 py-2 w-100">교재구분</th>
          <td class="border px-4 py-2">
            <!-- <select
              v-model="searchParam.selectCd"
              class="form-select form-select-sm w-140"
              @change="changeTextbook"
            >
              <option value="">교재구분선택</option>
              <option value="EB_COURSE">EB</option>
              <option value="EBP_COURSE">EBP</option>
              <option value="EX_COURSE">EX</option>
              <option value="RNL_BOOK">RNL</option>
            </select>
            <select
              v-model="searchParam.selectCdDtl"
              class="form-select form-select-sm w-140"
            >
              <option value="">전체상품선택</option>
              <option
                v-for="(book, index) in textbookList"
                :key="index"
                :value="book.cd"
              >
                {{ book.cdNm }}
              </option>
            </select> -->
          </td>
          <th class="w-100 border px-4 py-2">회원타입</th>
          <td class="border px-4 py-2 border-r-0">
            <!-- <select
              v-model="searchParam.selectTp"
              class="form-select form-select-sm w-140"
            >
              <option value="">회원검색타입</option>
              <option value="0">회원명</option>
              <option value="1">아이디</option>
              <option value="2">회원번호</option>
            </select>
            <label class="inline-block">
              <input
                v-model="searchParam.searchText"
                type="text"
                class="form-input block form-input-sm w-140"
                placeholder="Search..."
                @keyup.enter="search"
              />
            </label> -->
          </td>
        </tr>
      </SearchBox>

      <AgGridVue
        :column-defs="columnDefs"
        :default-col-def="gridOptions.defaultColDef"
        :row-data="rowData"
        :grid-options="gridOptions"
        class="ag-theme-material w-full"
        style="height: 400px;"
        @grid-ready="onGridReady"
      />
      <!-- :group-selects-children="true" -->
      <!-- :auto-group-column-def="autoGroupColumnDef" -->

      <!-- <Grid
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
        @check="onCheck"
        @uncheck="onUnCheck"
      /> -->
      <!-- :theme="gridProps.myTheme" -->
    </div>
  </ContentCard>
</template>

<script>
import { mapState } from 'vuex'
import {
  columnDefs,
  gridOptions,
  defaultOptions
} from '~/static/agGrid/agGridConfig.js'
// import { columns, rowHeaders, myTheme, columnOptions } from '~/static/tuiData'

export default {
  data() {
    return {
      defaultOptions: null,
      columnDefs: null,
      rowData: null,
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      // autoGroupColumnDef: null,
      // gridProps: {},
      searchParam: {
        selectCd: '',
        selectCdDtl: '',
        selectTp: '',
        searchText: ''
      }
    }
  },
  computed: {
    ...mapState({
      textbookList: (state) => state.memberMgr.memberMgr.textbookList,
      memberList: (state) => state.memberMgr.memberMgr.memberList
    })
  },
  // watch: {
  //   memberList() {
  //     this.gridProps.randomKey = this.randomKey()
  //   }
  // },
  async beforeMount() {
    this.gridOptions = gridOptions
    this.columnDefs = columnDefs
    this.defaultOptions = defaultOptions
    // this.autoGroupColumnDef = {
    // headerName: 'No',
    // field: 'no'
    // cellRenderer: 'agGroupCellRenderer'
    // cellRendererParams: {
    //   checkbox: true
    // }
    // }
    try {
      const { data } = await this.$axios.get(
        'http://sample.bmaster.kro.kr/contacts'
      )
      this.rowData = data.contacts
    } catch (e) {
      console.log(e)
    }
    // this.gridProps = {
    //   columns,
    //   rowHeaders,
    //   pageOptions: {
    //     perPage: 10,
    //     useClient: true
    //   },
    //   myTheme,
    //   columnOptions,
    //   header: {
    //     align: 'left'
    //   }
    // }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api
      this.columnApi = params.columnApi
    },
    getSelectedRows() {
      const selectedNodes = this.gridApi.getSelectedNodes()
      const selectedData = selectedNodes.map((node) => node.data)
      console.log(selectedData)
    },
    // randomKey() {
    //   const rand = parseInt(Math.random() * 100000) + 1
    //   return rand
    // },
    // onClick(e) {
    //   const uniqueKey = this.$refs.tuiGrid.data[e.rowKey].uniqueKey
    //   const param = e.instance.getRow(uniqueKey)
    //   delete param.uniqueKey
    //   delete param._attributes
    //   delete param._relationListItemMap
    //   delete param.rowSpanMap
    //   delete param.rowKey
    //   delete param.sortKey
    //   delete param.curPage
    //   delete param.pageNo
    //   delete param.nowPageNo
    //   delete param.pageRows
    //   delete param.purchaseCnt
    //   delete param.pageRow
    //   delete param.icontractCnt
    //   if (e.rowKey >= '0') {
    //     this.$router.push({
    //       name: `${this.$route.name}-detail`,
    //       params: param
    //     })
    //   }
    // },
    // onCheck() {
    //   console.log('onCheck!!')
    // },
    // onUnCheck() {
    //   console.log('on UnCheck!!')
    // },
    // async changeTextbook(e) {
    //   if (e.target.value) {
    //     await this.$store.dispatch(
    //       'memberMgr/memberMgr/getTextbookList',
    //       e.target.value
    //     )
    //   }
    // },
    async search() {
      if (!this.searchParam.searchText) {
        alert('검색어가 필요합니다.')
        return false
      }
      await this.$store.dispatch('memberMgr/memberMgr/search', this.searchParam)
    }
  }
}
</script>
