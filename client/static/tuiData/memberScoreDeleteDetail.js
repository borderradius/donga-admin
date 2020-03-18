class CustomRenderer {
  constructor(props) {
    const options = props.columnInfo.renderer.options
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
    header: 'Course',
    name: 'stdCourse'
  },
  {
    header: 'Step',
    name: 'stdStep'
  },
  {
    header: 'Week',
    name: 'stdWeek'
  },
  {
    header: 'L',
    name: ''
  },
  {
    header: 'S',
    name: ''
  },
  {
    header: 'R',
    name: ''
  },
  {
    header: 'W',
    name: ''
  },
  {
    header: 'V',
    name: ''
  },
  {
    header: 'G',
    name: ''
  },
  {
    header: 'total',
    name: 'examScore'
  },
  {
    header: '최종응시일',
    name: 'examDt'
  },
  {
    header: '초기화일시',
    name: 'examResetDt'
  },
  {
    header: '시험지',
    name: 'test',
    renderer: {
      type: CustomRenderer,
      options: {
        className: 'mod',
        textContent: '보기'
      }
    }
  },
  {
    header: '상태',
    name: 'examStat'
  },
  {
    header: '초기화',
    name: 'reset',
    renderer: {
      type: CustomRenderer,
      options: {
        className: 'del',
        textContent: '시험지초기화'
      }
    }
  }
]

// export const rowHeaders = ['rowNum']

export const columnOptions = {
  resizable: true
}
