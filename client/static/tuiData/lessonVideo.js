export const columns = [
  {
    header: '교재',
    name: 'planSeriesDtlCd'
  },
  {
    header: '코스',
    name: 'planSeriesCourse'
  },
  {
    header: '스텝',
    name: 'planSeriesStep'
  },
  {
    header: '제목',
    name: 'title'
  },
  {
    header: '파일형식',
    name: 'fileNmRl'
  },
  {
    header: '발표자',
    name: 'presenter'
  },
  {
    header: '발표일',
    name: 'presentDt'
  },
  {
    header: '등록일',
    name: 'creDtimeStr'
  },
  {
    header: '조회수',
    name: 'hitCnt',
    sortingType: 'desc',
    sortable: true
  }
]

export const rowHeaders = ['rowNum']

export const columnOptions = {
  resizable: true
}
