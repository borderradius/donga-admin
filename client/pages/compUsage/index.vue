<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      컴포넌트 사용법
    </h2>
    <div slot="content-container">
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- content card</h3>
        <pre class="text-xs">
          {{ contentCardPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- tabs</h3>
        <pre class="text-xs">
          {{ tabsPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- search box</h3>
        <pre class="text-xs">
          {{ searchBoxPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- vue plyr</h3>
        <pre class="text-xs">
          {{ vuePlyrPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- vue modal</h3>
        <pre class="text-xs">
          {{ vueModalPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- input</h3>
        <pre class="text-xs">
          {{ inputPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- select</h3>
        <pre class="text-xs">
          {{ selectPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- grid</h3>
        <pre class="text-xs">
          {{ gridPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- chart</h3>
        <pre class="text-xs">
          {{ chartPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- datepicker</h3>
        <pre class="text-xs">
          {{ datepickerPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- btn</h3>
        <pre class="text-xs">
          {{ btnPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- daum postcode</h3>
        <pre class="text-xs">
          {{ daumPostcodePre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- d3 vertical bar chart</h3>
        <pre class="text-xs">
          {{ d3VBarPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- d3 heatmap chart</h3>
        <pre class="text-xs">
          {{ d3HeatmapPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- tui editor</h3>
        <pre class="text-xs">
          {{ tuiEditorPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- vee validation</h3>
        <pre class="text-xs">
          {{ veeValidationPre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- vee validation file</h3>
        <pre class="text-xs">
          {{ veeValidationFilePre }}
        </pre>
      </div>
      <div class="mb-8">
        <h3 class="uppercase tracking-wider">- draggable</h3>
        <pre class="text-xs">
          {{ draggablePre }}
        </pre>
      </div>
    </div>
  </ContentCard>
</template>

<script>
export default {
  data() {
    return {
      contentCardPre: `
      <ContentCard size="full">
        <h2 slot="content-title">
          컴포넌트 사용법
        </h2>
        <div slot="content-container">내용</div>
      </ContentCard>`,
      tabsPre: `
      <Tabs :tabHeader="tabHeader">
        <div slot="tab-container-0"></div>
        <div slot="tab-container-1"></div>
        ...
      </Tabs>`,
      searchBoxPre: `
      <SearchBox
        v-on:search="search"
        v-on:register="register"
        regist
      >
        <tr slot="search-condition1">
          <th class="border border-l-0 px-4 py-2 w-100">날짜</th>
          <td class="border border-l-0 px-4 py-2 overflow-hidden">
            <Select />
          </td>
        </tr>
        <tr slot="search-condition2"></tr>
        <tr slot="search-condition3"></tr>
      </SearchBox>`,
      vuePlyrPre: `
      <vue-plyr>
        // case YouTube
        <div class="plyr__video-embed">
          <iframe
            src="https://youtu.be/ujuiWrtkzGI"
            allowfullscreen
            allowtransparency
            allow="autoplay"
            frameborder="0"
          />
        </div>
        
        // case Normal Video
        <video :src="dataUrl">
          <source :src="dataUrl" type="video/mp4" />
          <track
            kind="captions"
            label="English"
            srclang="en"
            src="captions-en.vtt"
            default
          />
        </video>
      </vue-plyr>
      
      * https://www.npmjs.com/package/vue-plyr
      `,
      vueModalPre: `
      <modal name="hello-world">
        hello, world!
      </modal>
      <button @click="show">modal open</button>

      <v-dialog />
      <button @click="showDialog" class="btn btn-sm btn-info">
        dialog modal
      </button>

      methods: {
        show () {
          this.$modal.show('hello-world');
        },
        hide () {
          this.$modal.hide('hello-world');
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
      
      * https://www.npmjs.com/package/vue-js-modal
      `,
      inputPre: `
      <Input
        id="searchText"
        v-on:inputEnter="search"
        v-model="searchParam.searchText"
        type="text" // password, number ..
        placeholder="검색어를 입력해주세요."
        size="lg"
        class="float-left w-140"
      />`,
      selectPre: `
      <Select
        v-on:input="search"
        v-model="searchParam.type"
        :option-data="selectData"
        default-value="0"
        default-name="검색타입"
        option-name-key="type"
        option-value-key="type"
        size="lg"
      />`,
      gridPre: `
      import { columns, rowHeaders, columnOptions } from '~/static/tuiData/levelTest'

      <Grid
        ref="tuiGrid"
        :key="gridProps.randomKey"
        :data="levelTestList"
        :columns="gridProps.columns"
        :scrollX="false"
        :scrollY="false"
        :columnOptions="gridProps.columnOptions"
        :rowHeaders="gridProps.rowHeaders"
        :pageOptions="gridProps.pageOptions"
        :header="gridProps.header"
        @click="onClick"
        @check="onCheck"
        @uncheck="onUnCheck"
        class="px-2"
      />

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
        onClick(e) {
          const uniqueKey = this.$refs.tuiGrid.data[e.rowKey].uniqueKey
          const param = e.instance.getRow(uniqueKey)
          if (e.rowKey >= '0') {
            this.$router.push({
              name: '${this.$route.name}-detail',
              params: param
            })
          }
        },
      }
      
      * https://www.npmjs.com/package/@toast-ui/vue-grid?activeTab=readme
      `,
      chartPre: `
      <div class="chart-box">
        <BarChart :data="barData" :options="barOptions" />
      </div>
      
      computed: {
        barOptions() {
          return {
            ...this.baseChartOptions,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    offsetGridLines: true
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100
                  }
                }
              ]
            },
            layout: {
              padding: {
                left: 30,
                right: 30,
                top: 0,
                bottom: 0
              }
            }
          }
        },
        barData() {
          // 바 차트에 들어갈 각각의 데이터 구하기
          const score = (type) => {
            const tempData = go(
              this.diagnosis.langStats,
              map((a) => a[type]),
              reduce(add)
            )
            return tempData / 5
          }

          return {
            datasets: [
              {
                label: '내 점수',
                backgroundColor: 'rgba(94, 68, 180, 0.25)',
                borderColor: '#999999',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(26,179,148,1)',
                pointBorderColor: '#fff',
                data: [score('examScore')]
              },
              {
                label: '응시자 평균',
                backgroundColor: 'rgba(66, 66, 66, 0.25)',
                borderColor: '#999999',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(26,179,148,1)',
                pointBorderColor: '#fff',
                data: [score('avgScore')]
              }
            ]
          }
        }
      }
      
      * https://www.npmjs.com/package/vue-chartjs
      `,
      datepickerPre: `
      <Datepicker v-model="dateDate" />
      
      * https://www.npmjs.com/package/vuejs-datepicker`,
      btnPre: `
      <Btn v-on:btnClick="btnClick" label="검색" />
      <Btn v-on:btnClick="btnClick" label="수정" type="mod" />
      <Btn v-on:btnClick="btnClick" label="정보" type="info" size="sm" />
      <Btn v-on:btnClick="btnClick" label="등록" type="register" />
      <Btn v-on:btnClick="btnClick" label="삭제" type="del" />
      <Btn v-on:btnClick="btnClick" label="회색" type="gray" />`,
      daumPostcodePre: `
      <VueDaumPostcode
        @complete="selectAddr"
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
      />
      
      method: {
        selectAddr(a) {
          console.log(a)
        }
      }
      
      * https://wani.kr/vue-daum-postcode/
      `,
      agGridPre: `
      <AgGridVue
        @grid-ready="onGridReady"
        :columnDefs="columnDefs"
        :defaultColDef="gridOptions.defaultColDef"
        :rowData="rowData"
        :gridOptions="gridOptions"
        :groupSelectsChildren="true"
        :autoGroupColumnDef="autoGroupColumnDef"
        class="ag-theme-material w-full"
        style="height: 610px;"
      />

      import {
        columnDefs,
        gridOptions,
        defaultOptions
      } from '~/static/agGrid/agGridConfig.js'

      data() {
        return {
          defaultOptions: null,
          columnDefs: null,
          rowData: null,
          gridApi: null,
          columnApi: null,
          autoGroupColumnDef: null,
        }
      }

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
        }
      }

      * https://www.ag-grid.com/
      `,
      d3VBarPre: `
      <D3VBar
        :xAxisData="xAxisData"
        :yAxisData="yAxisData"
        :chartData="chartData"
        :chartOptions="chartOptions"
      />

      data() {
        return {
          chartData: [
            { country: '2000', val: 2234 },
            { country: '2001', val: 3234 },
            { country: '2002', val: 6234 },
            { country: '2003', val: 1234 },
            { country: '2004', val: 4234 },
            { country: '2005', val: 7234 }
          },
          xAxisData: ['2000', '2001', '2002', '2003', '2004', '2005'],
          yAxisData: [0, 8284],
          chartOptions: {
            width: 1000,
            height: 600,
            marginTop: 20,
            marginRight: 20,
            marginBottom: 70,
            marginLeft: 40,
            xAxisType: '년' // optional
          }
        }
      }`,
      tuiEditorPre: `
      <TuiEditor v-model="editorText" :options="editorOptions" mode="wysiwyg" />
      <TuiEditorViewer :value="editorText" />


      data() {
        return {
          editorText: '',
          editorOptions: {
            hideModeSwitch: true,
            toolbarItems: [
              'heading',
              'bold',
              'italic',
              'divider',
              'hr',
              'quote',
              'divider',
              'ul',
              'ol',
              'divider',
              'image',
              'link'
            ]
          }
        }
      }
      
      * https://ui.toast.com/tui-editor/
      `,
      veeValidationPre: `
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(signin)">
          <div class="mb-4">
            <label for="userId" class="block mb-2 text-sm text-gray-800"
              >ID</label
            >
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|id"
              name="아이디"
              immediate
            >
              <input
                id="userId"
                v-model="user.userId"
                type="text"
                name="userId"
                class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              />
              <span class="text-red-500 text-xs mt-2">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </ValidationObserver>`,
      veeValidationFilePre: `
      <ValidationProvider
        ref="provider"
        v-slot="{ validate, errors }"
        rules="image"
        name="파일업로드"
      >
        <input
          ref="fileUpload"
          @change="fildUploaded"
          type="file"
          multiple
          class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>

      methods: {
        async fildUploaded(e) {
        const { valid } = await this.$refs.provider.validate(e)

        if (valid) {
          const fd = this.$refs.fileUpload.files
          this.uploadFiles = fd
        }
      },  
      }`,
      draggablePre: `
      <div ref="dragWrap" class="draggable--wrap">
        <img
          v-draggable="draggableValue"
          class="draggable--item"
          src="../../assets/img/search.svg"
        />
      </div>
      
      import { Draggable } from 'draggable-vue-directive'
      export default {
        directives: {
          Draggable
        },
        data() {
          return {
            handleId: 'handle-id',
            draggableValue: {
              resetInitialPos: true,
              initialPosition: { left: 320, top: 300 },
              onPositionChange: this.onPosChanged
            }
          }
        },
        mounted() {
          this.draggableValue.boundingElement = this.$refs.dragWrap
        },
        methods: {
          onPosChanged(pos) {
            console.log(pos.x)
          }
        }
      }

      <style lang="scss" scoped>
        .draggable {
          &--wrap {
            width: 200px;
            height: 200px;
            border: 1px solid #ccc;
            overflow: hidden;
            position: relative;
          }
          &--item {
            cursor: pointer;
          }
        }
      </style>
      `,
      d3HeatmapPre: `
      
      컴포넌트로 만든 후에 적기...
      `
    }
  }
}
</script>
