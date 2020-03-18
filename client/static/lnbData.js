export const lnbData = [
  {
    menu1: '대시보드',
    icon1: 'fas',
    icon2: 'tachometer-alt',
    link: 'dashboard',
    path: 'dashboard'
  },
  {
    menu1: '컴포넌트사용법',
    icon1: 'fas',
    icon2: 'wave-square',
    link: 'compUsage',
    path: 'compUsage'
  },
  {
    menu1: '리스트',
    icon1: 'fas',
    icon2: 'tools',
    link: 'list',
    path: 'list'
  },
  {
    menu1: '에디터',
    icon1: 'fas',
    icon2: 'pencil-alt',
    link: 'tuiEditor',
    path: 'tuiEditor'
  },
  {
    menu1: 'Form',
    icon1: 'fas',
    icon2: 'heading',
    link: 'form',
    path: 'form'
  },
  {
    menu1: 'Draggable',
    icon1: 'fas',
    icon2: 'spider',
    link: 'draggable',
    path: 'draggable'
  },
  {
    menu1: 'ApexChart',
    icon1: 'fas',
    icon2: 'chart-pie',
    path: 'apexchart',
    child: [
      {
        menu2: '라인차트',
        link: 'apexchart/line',
        path: 'line'
      },
      {
        menu2: '영역차트',
        link: 'apexchart/area',
        path: 'area'
      },
      {
        menu2: '바차트',
        link: 'apexchart/bar',
        path: 'bar'
      },
      {
        menu2: '버블차트',
        link: 'apexchart/bubble',
        path: 'bubble'
      },
      {
        menu2: '컬럼차트',
        link: 'apexchart/column',
        path: 'column'
      },
      {
        menu2: '도넛차트',
        link: 'apexchart/donut',
        path: 'donut'
      },
      {
        menu2: '히트맵차트',
        link: 'apexchart/heatmap',
        path: 'heatmap'
      },
      {
        menu2: '믹스차트',
        link: 'apexchart/mixed',
        path: 'mixed'
      },
      {
        menu2: 'RadialBar차트',
        link: 'apexchart/radialbar',
        path: 'radialbar'
      },
      {
        menu2: 'scatter차트',
        link: 'apexchart/scatter',
        path: 'scatter'
      },
      {
        menu2: 'radar차트',
        link: 'apexchart/radar',
        path: 'radar'
      },
      {
        menu2: 'rangeBar차트',
        link: 'apexchart/rangeBar',
        path: 'rangeBar'
      },
      {
        menu2: 'pie차트',
        link: 'apexchart/pie',
        path: 'pie'
      }
    ]
  },
  // {
  //   menu1: 'D3',
  //   icon1: 'fas',
  //   icon2: 'chart-pie',
  //   path: 'd3',
  //   child: [
  //     {
  //       menu2: '세로그래프',
  //       link: 'd3/vbar',
  //       path: 'vbar'
  //     },
  //     {
  //       menu2: '히트맵그래프',
  //       link: 'd3/heatmap',
  //       path: 'heatmap'
  //     }
  //   ]
  // },
  {
    menu1: '회원관리',
    icon1: 'fas',
    icon2: 'user',
    path: 'memberMgr',
    child: [
      {
        menu2: '전체회원관리',
        link: 'memberMgr/allMemberMgr',
        path: 'allMemberMgr'
      },
      {
        menu2: '레벨테스트 현황',
        link: 'memberMgr/levelTest',
        path: 'levelTest'
      },
      {
        menu2: '회원성적 삭제',
        link: 'memberMgr/memberScoreDelete',
        path: 'memberScoreDelete'
      },
      {
        menu2: 'EB코스 변경',
        link: ''
      },
      {
        menu2: '학습 이력 초기화',
        link: 'memberMgr/studyHistoryReset',
        path: 'studyHistoryReset'
      },
      {
        menu2: '3Q검사 / 종합특성검사 관리',
        link: ''
      }
    ]
  },
  {
    menu1: '콘텐츠관리',
    icon1: 'fas',
    icon2: 'feather-alt',
    path: 'contentMgr',
    child: [
      {
        menu2: '버디콘텐츠 보기',
        link: ''
      },
      {
        menu2: 'EBP 콘텐츠 통합관리',
        link: '',
        child: [
          {
            menu3: 'EBP 콘텐츠관리'
          },
          {
            menu3: 'EBP 문제지관리'
          },
          {
            menu3: 'EBP 학습큐레이션(노출)관리'
          },
          {
            menu3: '문제지지총평 템플릿관리'
          }
        ]
      },
      {
        menu2: 'EBB/EX 콘텐츠 관리',
        link: ''
      },
      {
        menu2: '문제지관리',
        link: ''
      },
      {
        menu2: '버디라이브러리 보기',
        link: ''
      },
      {
        menu2: '버디라이브러리 등록',
        link: ''
      },
      {
        menu2: 'Read N Learn',
        link: ''
      },
      {
        menu2: 'Read N Learn:자료등록',
        link: ''
      },
      {
        menu2: '버디몬샵 관리',
        link: ''
      }
    ]
  }
  // {
  //   menu1: '학습관리',
  //   icon1: 'fas',
  //   icon2: 'school',
  //   path: 'studyMgr',
  //   child: [
  //     {
  //       menu2: 'EBP 학습 & 평가통계',
  //       link: ''
  //     },
  //     {
  //       menu2: 'EBB/EX 학습 & 평가통계',
  //       link: ''
  //     }
  //   ]
  // },
  // {
  //   menu1: '학습지도자료',
  //   icon1: 'fas',
  //   icon2: 'chalkboard-teacher',
  //   path: 'tutorLib',
  //   child: [
  //     {
  //       menu2: '지도 동영상',
  //       link: 'tutorLib/lessonVideo',
  //       path: 'lessonVideo'
  //     },
  //     {
  //       menu2: '교육자료 지원',
  //       link: ''
  //     },
  //     {
  //       menu2: '무료 수업교재',
  //       link: ''
  //     },
  //     {
  //       menu2: '교사용 자료실',
  //       link: ''
  //     },
  //     {
  //       menu2: '월별 교사지원 자료실',
  //       link: ''
  //     },
  //     {
  //       menu2: 'Read N Learn 보충자료실',
  //       link: ''
  //     }
  //   ]
  // },
  // {
  //   menu1: '커뮤니티',
  //   icon1: 'fas',
  //   icon2: 'comments',
  //   path: 'community',
  //   child: [
  //     {
  //       menu2: '교사게시판',
  //       link: ''
  //     },
  //     {
  //       menu2: '학습상담',
  //       link: ''
  //     },
  //     {
  //       menu2: '신입교사 매뉴얼',
  //       link: ''
  //     }
  //   ]
  // },
  // {
  //   menu1: '사이트관리',
  //   icon1: 'fas',
  //   icon2: 'tools',
  //   path: 'siteMgr',
  //   child: [
  //     {
  //       menu2: 'FAQ',
  //       link: ''
  //     },
  //     {
  //       menu2: '이용문의',
  //       link: ''
  //     },
  //     {
  //       menu2: '메인관리',
  //       link: ''
  //     },
  //     {
  //       menu2: 'EX첨삭센터',
  //       link: ''
  //     },
  //     {
  //       menu2: '가까운 지점찾기',
  //       link: ''
  //     },
  //     {
  //       menu2: '공지사항',
  //       link: ''
  //     },
  //     {
  //       menu2: '접속통계',
  //       link: ''
  //     }
  //   ]
  // },
  // {
  //   menu1: '시스템관리',
  //   icon1: 'fas',
  //   icon2: 'cog',
  //   path: 'systemMgr',
  //   child: [
  //     {
  //       menu2: '코드관리',
  //       link: ''
  //     },
  //     {
  //       menu2: '메뉴관리',
  //       link: ''
  //     },
  //     {
  //       menu2: '계정관리',
  //       link: ''
  //     }
  //   ]
  // }
]
