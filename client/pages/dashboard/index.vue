<template>
  <ContentCard>
    <h2 slot="content-title">
      연습장
    </h2>
    <div slot="content-container">
      <div class="mb-4">
        d3 gogo
        <!-- <D3HBar /> -->
      </div>
      <div class="mb-4">
        <div class="mb-4">
          <Btn
            label="Get Selected Rows"
            type="info"
            @btnClick="getSelectedRows"
          />
        </div>
        <div class="mb-4">
          <AgGridVue
            :column-defs="columnDefs"
            :default-col-def="gridOptions.defaultColDef"
            :row-data="rowData"
            :grid-options="gridOptions"
            :group-selects-children="true"
            :auto-group-column-def="autoGroupColumnDef"
            class="ag-theme-material w-full"
            style="height: 610px;"
            @grid-ready="onGridReady"
          />
        </div>
      </div>
      <div class="flex mb-4">
        <Btn label="검색" class="mr-2" @btnClick="btnClick" />
        <Btn label="수정" type="mod" class="mr-2" @btnClick="btnClick" />
        <Btn
          label="정보"
          type="info"
          size="sm"
          class="mr-2"
          @btnClick="btnClick"
        />
        <Btn label="등록" type="register" class="mr-2" @btnClick="btnClick" />
        <Btn label="삭제" type="del" class="mr-2" @btnClick="btnClick" />
        <Btn label="회색" type="gray" class="mr-2" @btnClick="btnClick" />
      </div>
      <div class="flex mb-4">
        <modal name="hello-world">
          hello, world!
        </modal>
        <button class="btn btn-sm btn-info mr-2" @click="show">modal</button>

        <v-dialog />
        <button class="btn btn-sm btn-info" @click="showDialog">
          dialog modal
        </button>
      </div>

      <div class="flex mb-4">
        <div class="w-1/2">
          <Datepicker v-model="dateDate" />
        </div>
      </div>
      <div class="flex mb-4">
        <VueDaumPostcode
          :animation="true"
          :theme="{
            bgColor: '#1e1e2d',
            searchBgColor: '#1e1e2d',
            contentBgColor: '#1e1e2d',
            pageBgColor: '#1e1e2d',
            textColor: '#FFFFFF',
            queryTextColor: '#FFFFFF',
            outlineColor: '#44444'
          }"
          @complete="selectAddr"
        />
      </div>
    </div>
    <Datepicker />
  </ContentCard>
</template>

<script>
import {
  columnDefs,
  gridOptions,
  defaultOptions
} from '~/static/agGrid/agGridConfig.js'

export default {
  data() {
    return {
      defaultOptions: null,
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null,
      autoGroupColumnDef: null,
      dateDate: '',
      selectModel: '',
      selectData: [
        {
          cd: 'A',
          cdDtl: 'EB_COURSEA',
          cdNm: '코스-A',
          addFld1: 'A',
          addFld2: 'F',
          descrt: '코스-A',
          dispOrds: '1'
        },
        {
          cd: 'B',
          cdDtl: 'EB_COURSEB',
          cdNm: '코스-B',
          addFld1: 'A',
          addFld2: 'F',
          descrt: '코스-B',
          dispOrds: '2'
        },
        {
          cd: 'C',
          cdDtl: 'EB_COURSEC',
          cdNm: '코스-C',
          addFld1: 'A',
          addFld2: 'F',
          descrt: '코스-C',
          dispOrds: '3'
        },
        {
          cd: 'D',
          cdDtl: 'EB_COURSED',
          cdNm: '코스-D',
          addFld1: 'A',
          addFld2: 'F',
          descrt: '코스-D',
          dispOrds: '4'
        },
        {
          cd: 'E',
          cdDtl: 'EB_COURSEE',
          cdNm: '코스-E',
          addFld1: 'A',
          addFld2: 'F',
          descrt: '코스-E',
          dispOrds: '5'
        },
        {
          cd: 'F',
          cdDtl: 'EB_COURSEF',
          cdNm: '코스-F',
          addFld1: 'A',
          addFld2: 'F',
          descrt: '코스-F',
          dispOrds: '6'
        }
      ]
    }
  },
  async beforeMount() {
    this.gridOptions = gridOptions
    this.columnDefs = columnDefs
    this.defaultOptions = defaultOptions
    this.autoGroupColumnDef = {
      headerName: 'No',
      field: 'no',
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        checkbox: true
      }
    }

    try {
      const { data } = await this.$axios.get(
        'http://sample.bmaster.kro.kr/contacts'
      )
      this.rowData = data.contacts
    } catch (e) {
      console.log(e)
    }
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
    selectAddr(a) {
      console.log(a)
    },
    btnClick() {
      console.log('haha')
    },
    show() {
      this.$modal.show('hello-world')
    },
    hide() {
      this.$modal.hide('hello-world')
    },
    showDialog() {
      this.$modal.show('dialog', {
        title: 'Alert!',
        text: 'You are too awesome',
        buttons: [
          {
            title: 'Deal with it',
            handler: () => {
              alert('Woot!')
            }
          },
          {
            title: '', // Button title
            default: true, // Will be triggered by default if 'Enter' pressed.
            handler: () => {} // Button click handler
          },
          {
            title: 'Close'
          }
        ]
      })
    }
  }
}
</script>
