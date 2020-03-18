<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      지도 동영상
    </h2>
    <div slot="content-container">
      <Tabs :tab-header="tabHeader">
        <div slot="tab-container-0">
          <SearchBox :regist="true" @search="search" @register="register">
            <tr slot="search-condition1">
              <th class="border border-l-0 px-4 py-2 w-100">교재구분</th>
              <td class="border px-4 py-2">
                <select
                  v-model="searchParam.planSeriesDtlCd"
                  class="form-select form-select-sm w-140"
                  @change="getCourseStep"
                >
                  <option value="">교재구분선택</option>
                  <!-- <option value="EBP">EBP</option> -->
                  <option value="EX">EX</option>
                </select>
                <select
                  v-model="searchParam.planSeriesCourse"
                  class="form-select form-select-sm w-140"
                >
                  <option value="">코스선택</option>
                  <option v-for="c in courseList" :key="c.cd" :value="c.cd">{{
                    c.cdNm
                  }}</option>
                </select>
                <select
                  v-model="searchParam.planSeriesStep"
                  class="form-select form-select-sm w-140"
                >
                  <option value="">스텝선택</option>
                  <option v-for="s in stepList" :key="s.cd" :value="s.cd">{{
                    s.cdNm
                  }}</option>
                </select>
              </td>
              <th class="w-100 border px-4 py-2">회원타입</th>
              <td class="border px-4 py-2 border-r-0">
                <select
                  v-model="searchParam.searchType"
                  class="form-select form-select-sm w-140"
                >
                  <option value="">회원타입</option>
                  <option value="title">제목</option>
                  <option value="presenter">발표자</option>
                </select>
                <label class="inline-block">
                  <input
                    v-model="searchParam.searchText"
                    type="text"
                    class="form-input block form-input-sm w-140"
                    placeholder="Search..."
                    @keyup.enter="search"
                  />
                </label>
              </td>
            </tr>
          </SearchBox>

          <Grid
            ref="tuiGrid"
            :key="gridProps.randomKey"
            :data="lessonVideo"
            :columns="gridProps.columns"
            :scroll-x="false"
            :scroll-y="false"
            :column-options="gridProps.columnOptions"
            :row-headers="gridProps.rowHeaders"
            :page-options="gridProps.pageOptions"
            :header="gridProps.header"
            class="px-2"
            @click="onClick"
          />
          <!-- 
            @check="onCheck"
            @uncheck="onUnCheck" -->
        </div>
        <div slot="tab-container-1">
          tab 2 cont
        </div>
      </Tabs>
    </div>
  </ContentCard>
</template>

<script>
import { mapState } from 'vuex'
import {
  columns,
  rowHeaders,
  columnOptions
} from '~/static/tuiData/lessonVideo'

export default {
  async asyncData({ store }) {
    await store.dispatch('tutorLib/tutorLib/getLessonVideo')
  },
  data() {
    return {
      tabHeader: ['EBP | EX', 'EB'],
      searchParam: {
        planSeriesDtlCd: '',
        planSeriesCourse: '',
        planSeriesStep: '',
        searchType: '',
        searchText: ''
      },
      courseList: [],
      stepList: []
    }
  },
  computed: {
    ...mapState({
      lessonVideo: (state) => state.tutorLib.tutorLib.lessonVideo
    })
  },
  watch: {
    lessonVideo() {
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
    async search() {
      await this.$store.dispatch(
        'tutorLib/tutorLib/getLessonVideo',
        this.searchParam
      )
    },
    register() {
      this.$router.push('/tutorLib/register')
    },
    onClick(e) {
      const row = this.$refs.tuiGrid.invoke('getRow', e.rowKey)
      this.$router.push({
        name: 'tutorLib-detail',
        params: {
          stdAssistSeq: row.stdAssistSeq
        }
      })
    },
    /**
     * searchBox의 코스, 스텝 정보 가져오기
     */
    async getCourseStep() {
      // 코스요청
      const course = await this.$axios.$get('/tutorLib/ajaxGetCodeListByUpCd', {
        params: {
          upCd: 'EX_COURSE'
        }
      })
      this.courseList = course.result.list
      // 스텝요청
      const step = await this.$axios.$get('/tutorLib/ajaxGetCodeListByUpCd', {
        params: {
          upCd: 'EX_STEP'
        }
      })
      this.stepList = step.result.list
    }
  }
}
</script>
