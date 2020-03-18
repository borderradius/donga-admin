const columnDefs = [
  // {
  //   headerName: 'No',
  //   field: 'no',
  //   sortable: true,
  //   filter: true,
  //   checkboxSelection: false,
  //   // resizable: true,
  //   width: 100,
  //   cellRenderer(params) {
  //     if (!params.node.group) {
  //       return params.node.rowIndex + 1
  //     } else {
  //       return null
  //     }
  //   }
  // },
  {
    headerName: 'No',
    field: 'no',
    resizable: true,
    sortable: true,
    filter: true
    // checkboxSelection: true // 체크박스 생성
  },
  {
    headerName: 'Name',
    field: 'name',
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: 'Tel',
    field: 'tel',
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: 'Address',
    field: 'address',
    sortable: true,
    filter: true,
    resizable: true
    // rowGroup: true // 해당 컬럼으로 그룹화
  },
  {
    headerName: 'Photo',
    field: 'photo',
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: '상품',
    field: 'product',
    sortable: true,
    filter: true,
    resizable: true,
    width: 140
  },
  {
    headerName: '계약건수',
    field: 'contractCount',
    sortable: true,
    filter: true,
    resizable: true,
    width: 140
  },
  {
    headerName: '보호자명',
    field: 'parent',
    sortable: true,
    filter: true,
    resizable: true,
    cellStyle: {
      color: 'olive'
    }
  },
  {
    headerName: '지도개시일',
    field: 'teachStart',
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: '상세',
    field: 'detail',
    sortable: true,
    filter: true,
    resizable: true
  },
  {
    headerName: '비번초기화',
    field: 'passwordReset',
    sortable: true,
    filter: true,
    resizable: true
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
  paginationAutoPageSize: false,
  paginationPageSize: 10
}

export { columnDefs, defaultOptions, gridOptions }
