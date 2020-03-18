const columnDefs = [
  {
    headerName: 'No',
    field: 'no',
    // sortable: true,
    // filter: true,
    checkboxSelection: false,
    // resizable: true,
    width: 100,
    cellRenderer(params) {
      if (!params.node.group) {
        return params.node.rowIndex + 1
      } else {
        return null
      }
    }
  },
  {
    headerName: '판매지점',
    field: 'saleBranch',
    width: 140
    // sortable: true,
    // filter: true
  },
  {
    headerName: '지도상태',
    field: 'teachState',
    // sortable: true,
    // filter: true,
    width: 140
  },
  {
    headerName: '회원번호',
    field: 'memberNo',
    sortable: true,
    filter: true
  },
  {
    headerName: '회원명(아이디)',
    field: 'memberNameOrId',
    sortable: true,
    filter: true
  },
  {
    headerName: '생년월일',
    field: 'birth'
    // sortable: true,
    // filter: true
  },
  {
    headerName: '상품',
    field: 'product',
    // sortable: true,
    // filter: true,
    width: 140
  },
  {
    headerName: '계약건수',
    field: 'contractCount',
    // sortable: true,
    // filter: true,
    width: 140
  },
  {
    headerName: '보호자명',
    field: 'parent',
    // sortable: true,
    filter: true,
    cellStyle: {
      color: 'olive'
    }
  },
  {
    headerName: '지도개시일',
    field: 'teachStart',
    sortable: true,
    filter: true
  },
  {
    headerName: '상세',
    field: 'detail',
    sortable: true,
    filter: true
  },
  {
    headerName: '비번초기화',
    field: 'passwordReset',
    sortable: true,
    filter: true
    // cellRenderer: 'childRenderer'
    // cellRenderer(params) {
    //   // console.log(params.node)
    //   if (!params.node.group) {
    //     return (
    //       '<button v-on:click="aaa" class="btn btn-info">' +
    //       params.data.passwordReset +
    //       '</button>'
    //     )
    //   } else {
    //     return null
    //   }
    // }
    // cellRenderer: 'aaa',
    // cellRendererParams: {
    //   text: 'render111'
    // }
    // cellRendererSelector() {
    //   return {
    //     component: 'aaa'
    //   }
    // }
  }
]

const defaultOptions = {
  defaultColDef: {
    resizable: true
  }
}

const gridOptions = {
  rowSelection: 'multiple',
  localeText: {
    noRowToShow: 'Not found data'
  },
  animateRows: true,
  pagination: true,
  paginationAutoPageSize: true,
  paginationPageSize: 10
}

export { columnDefs, defaultOptions, gridOptions }
