// class CustomRenderer {
//   constructor(props) {
//     const options = props.columnInfo.renderer.options
//     const btn = document.createElement('button')
//     btn.setAttribute('class', `btn btn-sm btn-${options.className}`)
//     btn.textContent = options.textContent

//     this.el = btn
//     this.render(props)
//   }

//   getElement() {
//     return this.el
//   }

//   render(props) {
//     this.el.value = String(props.value)
//   }
// }

export const columns = [
  {
    header: '교사',
    name: 'branchNm'
  },
  {
    header: '지도상태',
    name: 'guideSts'
  },
  {
    header: '회원번호',
    name: 'memNo'
  },
  {
    header: '회원명',
    name: 'memNm'
  },
  {
    header: '아이디',
    name: 'memLoginId'
  },
  {
    header: '상품',
    name: 'productNm'
  }
  // {
  //   header: '상세보기',
  //   name: 'memNo',
  //   renderer: {
  //     type: CustomRenderer,
  //     options: {
  //       className: 'mod',
  //       textContent: '보기'
  //     }
  //   }
  // }
]

export const rowHeaders = ['rowNum']

export const columnOptions = {
  resizable: true
}
