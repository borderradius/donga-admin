<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      LEVEL TEST 진단서
    </h2>
    <div slot="content-container">
      <h3 class="tracking-wider mb-4 border-l-4 pl-2">레벨테스트 기본정보</h3>
      <div class="mb-8">
        <Table :t-header="tHeader.defaultInfo" :t-body="tBody.defaultInfo" />
      </div>
      <h3 class="tracking-wider mb-2 border-l-4 pl-2">언어능력별 성취도</h3>
      <div class="mb-8">
        <div class="w-full mx-auto">
          <div class="bg-white shadow rounded">
            <table class="table-basic">
              <thead>
                <tr>
                  <th>영역</th>
                  <th>comment</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in diagnosis.langStats" :key="index">
                  <td>{{ item.field }}</td>
                  <td>{{ item.cmmnt }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h3 class="tracking-wider mb-2 border-l-4 pl-2">종합성취도 분석</h3>
      <div class="flex mb-8">
        <div class="w-1/2">
          <div class="chart-box">
            <RadarChart :data="radarData" :options="radarOptions" />
          </div>
        </div>
        <div class="w-1/2">
          <div class="chart-box">
            <BarChart :data="barData" :options="barOptions" />
          </div>
        </div>
      </div>
      <h3 class="tracking-wider mb-2 border-l-4 pl-2">
        Critical Skill Analysis
      </h3>
      <div class="mb-8">
        <div class="w-full mx-auto">
          <div class="bg-white shadow rounded">
            <table class="table-basic">
              <thead>
                <tr>
                  <th>영역</th>
                  <th>comment</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in diagnosis.crtclStats" :key="index">
                  <td>{{ item.field }}</td>
                  <td>{{ item.cmmnt }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <h3 class="tracking-wider mb-2 border-l-4 pl-2">
        종합 comment
      </h3>
      <div class="mb-8">
        <div class="border p-2 text-gray-800 text-xs">
          {{ diagnosis.totCmmnt }}
        </div>
      </div>
      <h3 class="tracking-wider mb-2 border-l-4 pl-2">
        추천단계
      </h3>
      <div class="mb-8">
        추천단계 테이블
      </div>
      <h3 class="tracking-wider mb-2 border-l-4 pl-2">
        추천 학습법
      </h3>
      <div class="mb-8">
        <div class="border p-2 text-gray-800 text-xs">
          {{ diagnosis.recommCmmnt }}
        </div>
      </div>
    </div>
  </ContentCard>
</template>

<script>
import { mapState } from 'vuex'
import { go, map, reduce, add } from '~/plugins/fx'

export default {
  async asyncData({ store, route }) {
    await store.dispatch('memberMgr/levelTest/getDiagnosis', route.params)
  },
  computed: {
    ...mapState({
      diagnosis: (state) => state.memberMgr.levelTest.diagnosis
    }),
    tHeader() {
      return {
        defaultInfo: [
          { title: '응시유형' },
          { title: '학교' },
          { title: '학년' },
          { title: '이름' },
          { title: '시험일' }
        ]
      }
    },
    tBody() {
      // const achievementBody = []
      // this.diagnosis.langStats.forEach((item) => {
      //   achievementBody.push({ td0: item.field, td1: item.cmmnt })
      // })
      // console.log(achievementBody)
      return {
        defaultInfo: [
          this.diagnosis.examTp,
          this.diagnosis.memShl,
          this.diagnosis.memGd,
          this.diagnosis.memNm,
          this.diagnosis.examDt
        ]
        // achievement: achievementBody
      }
    },
    radarOptions() {
      return {
        ...this.baseChartOptions,
        scale: {
          ticks: {
            display: false,
            maxTicksLimit: 6,
            min: 0, // it is for ignoring negative step.
            beginAtZero: true
          }
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
    radarData() {
      const indexdef = {
        LST: 0,
        WRT: 1,
        RDN: 2,
        SPK: 3,
        VOC: 4
      }
      const score = [0, 0, 0, 0, 0]
      const avgScore = [0, 0, 0, 0, 0]

      this.diagnosis.langStats.forEach((e) => {
        const index = indexdef[e.fieldCd]
        score[index] = e.examScore
        avgScore[index] = e.avgScore
      })
      return {
        labels: ['Listening', 'Writing', 'Reading', 'Speaking', 'Vocabulary'],
        datasets: [
          {
            label: '내 점수',
            backgroundColor: 'rgba(94, 68, 180, 0.25)',
            borderColor: '#5e44b4',
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            data: score
          },
          {
            label: '응시자 평균',
            backgroundColor: 'rgba(66, 66, 66, 0.25)',
            borderColor: '#999999',
            borderWidth: 2,
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            data: avgScore
          }
        ]
      }
    },
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
}
</script>
