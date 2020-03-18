class CustomRenderer {
  constructor(props) {
    const options = props.columnInfo.renderer.options
    // console.log(options)
    const btn = document.createElement('button')
    btn.setAttribute('class', `btn btn-sm btn-${options.className}`)
    btn.textContent = options.textContent

    this.el = btn
    this.render(props)
  }

  getElement() {
    return this.el
  }

  render(props) {
    this.el.value = String(props.value)
  }
}

export const columns = [
  {
    header: '학교',
    name: 'schlNm'
  },
  {
    header: '학년',
    name: 'schlGd'
  },
  {
    header: '응시자',
    name: 'stdntNm'
  },
  {
    header: '학부모 연락처',
    name: 'parentPhone'
  },
  {
    header: '지점',
    name: 'tutorBranchNm'
  },
  {
    header: '교사명',
    name: 'tutorNm'
  },
  {
    header: '사번',
    name: 'tutorId'
  },
  {
    header: '테스트일',
    name: 'examDt',
    sortingType: 'desc',
    sortable: true
  },
  {
    header: '응시유형',
    name: 'examTp'
  },
  {
    header: '시험지',
    name: 'test',
    renderer: {
      type: CustomRenderer,
      options: {
        className: 'mod',
        textContent: '시험지'
      }
    }
  },
  {
    header: '진단서',
    name: 'result',
    renderer: {
      type: CustomRenderer,
      options: {
        className: 'info',
        textContent: '진단서'
      }
    }
  },
  {
    header: '삭제',
    name: 'delete',
    renderer: {
      type: CustomRenderer,
      options: {
        className: 'del',
        textContent: '삭제'
      }
    }
  }
]

export const rowHeaders = ['rowNum']

export const columnOptions = {
  resizable: true
}
