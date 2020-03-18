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
    header: '판매지점',
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
  },
  {
    header: '보호자명',
    name: 'parentNm'
  },
  {
    header: '학습개시일',
    name: 'requestDate'
  },
  {
    header: '휴회개시일',
    name: ''
  },
  {
    header: '복회일',
    name: ''
  },
  {
    header: '상품기간',
    name: 'subscriptionTerms'
  },
  {
    header: '유보기간',
    name: 'examResetDt'
  }
  // {
  //   header: '학습이력 초기화',
  //   name: 'reset',
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
