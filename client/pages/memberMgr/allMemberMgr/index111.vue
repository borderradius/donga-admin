<template>
  <div>
    <h1>applications / users</h1>
    <!-- <AgGridVue
      :grid-options="gridOptions"
      :default-col-def="gridOptions.defaultColDef"
      :column-defs="columnDefs"
      :row-data="lists"
      :components="components"
      class="ag-theme-balham w-full"
      style="height: 300px;"
      @grid-ready="onGridReady"
    /> -->
    <div class="mt-4">
      <button
        class="bg-gray-600 text-white rounded-sm text-xs px-2 py-1"
        @click="getSelectedRow"
      >
        get selected row
      </button>
      <pre class="text-xs">{{ result }}</pre>
    </div>
  </div>
</template>

<script>
import {
  columnDefs,
  gridOptions,
  defaultOptions
} from '~~/client/static/tableHeader/memberList'
// import ChildRenderer from '~~/client/static/agRenderer/childRenderer'

export default {
  data() {
    return {
      columnDefs: {},
      lists: [],
      gridOptions: '',
      defaultOptions: '',
      gridApi: null,
      result: null,
      components: null
    }
  },
  beforeMount() {
    this.columnDefs = columnDefs
    this.gridOptions = gridOptions
    this.defaultOptions = defaultOptions
    this.lists = [
      {
        no: 1,
        saleBranch: '푸르넷지점',
        teachState: '정상',
        memberNo: '9980000171',
        memberNameOrId: '샘플71(pre171)',
        birth: '2001-01-01',
        product: 'EBP',
        contractCount: '1',
        parent: '아이유',
        teachStart: '2020-01-01',
        detail: '버튼',
        passwordReset: '버튼'
      },
      {
        no: 2,
        saleBranch: '푸르넷지점',
        teachState: '휴강',
        memberNo: '9980000172',
        memberNameOrId: '샘플71(pre172)',
        birth: '2001-01-02',
        product: 'EBB',
        contractCount: '2',
        parent: '서수진',
        teachStart: '2020-02-02',
        detail: '버튼',
        passwordReset: '버튼'
      }
    ]
    // this.components = {
    //   childRenderer: ChildRenderer
    // }
    // this.frameworkComponents = {
    //   childRenderer: ChildRenderer
    // }
  },
  methods: {
    onGridReady(params) {
      console.log('그리드 준비됌')
      this.gridApi = params.api
      this.columnApi = params.columnApi
      this.gridApi.sizeColumnsToFit()
    },
    getSelectedRow() {
      const selectedNodes = this.gridApi.getSelectedNodes()
      const selectedData = selectedNodes.map((node) => node.data)
      this.result = selectedData
    },
    aaa(param) {
      return `<button class="bg-gray-600 text-white rounded-sm text-xs px-1">${param.text}</button>`
    }
  }
}
</script>

<style lang="scss" scoped></style>
