<template>
  <ContentCard>
    <h2 slot="content-title">
      지도동영상 상세
    </h2>
    <div slot="content-container">
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-first-name"
          >
            발표자
          </label>
          <input
            id="grid-first-name"
            v-model="modifyInfo.presenter"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div class="md:w-1/3 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-last-name"
          >
            발표일
          </label>
          <input
            id="grid-last-name"
            v-model="modifyInfo.presentDt"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            type="text"
            placeholder="날짜선택"
          />
        </div>
        <div class="md:w-1/3 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-password"
          >
            제목
          </label>
          <input
            id="grid-password"
            v-model="modifyInfo.title"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            type="text"
            placeholder="제목"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-city"
          >
            교재
          </label>
          <div class="relative">
            <select
              id="grid-state"
              v-model="modifyInfo.planSeriesDtlCd"
              class="block appearance-none w-full border bg-white border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
            >
              <option>선택하세요</option>
              <option value="EBP">EBP</option>
              <option value="EX">EX</option>
            </select>
            <div
              class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker right-0 top-0 mt-4"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-state"
          >
            코스
          </label>
          <div class="relative">
            <select
              id="grid-state"
              v-model="modifyInfo.planSeriesCourse"
              class="block appearance-none w-full border bg-white border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
            >
              <option>선택하세요</option>
              <option value="A">코스-A</option>
              <option value="B">코스-B</option>
              <option value="C">코스-C</option>
              <option value="D">코스-D</option>
              <option value="E">코스-E</option>
              <option value="F">코스-F</option>
              <option value="G">코스-G</option>
            </select>
            <div
              class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker right-0 top-0 mt-4"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-zip"
          >
            스텝
          </label>
          <div class="relative">
            <select
              id="grid-state"
              v-model="modifyInfo.planSeriesStep"
              class="block appearance-none w-full border bg-white border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
            >
              <option>선택하세요</option>
              <option value="1">스텝-1(호)</option>
              <option value="2">스텝-2(호)</option>
              <option value="3">스텝-3(호)</option>
              <option value="4">스텝-4(호)</option>
              <option value="5">스텝-5(호)</option>
              <option value="6">스텝-6(호)</option>
            </select>
            <div
              class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker right-0 top-0 mt-4"
            >
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-2">
        <div class="md:w-1/2 px-3">
          <div class="border border-dashed border-gray-500 relative">
            <input
              ref="fileUpload"
              type="file"
              multiple
              class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
              @change="fileUploaded"
            />
            <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
              <h4>
                Drop files anywhere to upload
                <br />or
              </h4>
              <p class="">Select Files</p>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3">
          <div v-if="fileNmRl">
            {{ fileNmRl }}
            <button
              :class="{ hide: uploadFiles }"
              class="btn btn-sm btn-info"
              @click="previewFile()"
            >
              미리보기
            </button>
          </div>
          <!-- <ul>
            <li v-for="(item, index) in uploadFiles" :key="index" class="mb-2">
              {{ item.name }}
              <button @click="delFile(index)" class="btn btn-sm btn-del">
                del
              </button>
            </li>
          </ul> -->
        </div>
      </div>
      <button class="btn btn-mod" @click="modDetail">수정</button>
      <n-link class="btn" to="/tutorLib/lessonVideo">목록</n-link>
      <button class="btn btn-del" @click="delDetail">삭제</button>
      <modal name="open-video">
        <vue-plyr>
          <div class="plyr__video-embed">
            <iframe
              src="https://youtu.be/ujuiWrtkzGI"
              allowfullscreen
              allowtransparency
              allow="autoplay"
            />
          </div>
          <!-- <video src="https://youtu.be/ujuiWrtkzGI">
            <source src="https://youtu.be/ujuiWrtkzGI" type="video/mp4" />
            <track
              kind="captions"
              label="English"
              srclang="en"
              src="captions-en.vtt"
              default
            />
          </video> -->
        </vue-plyr>
      </modal>
    </div>
  </ContentCard>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  async asyncData({ store, route }) {
    await store.dispatch('tutorLib/tutorLib/getMediaDetail', route.params)
  },
  data() {
    return {
      uploadFiles: '',
      fileNmRl: '',
      modifyInfo: {
        presenter: '',
        presentDt: '',
        planSeriesDtlCd: '',
        planSeriesCourse: '',
        planSeriesStep: '',
        title: '',
        stdAssistSeq: ''
      }
    }
  },
  computed: {
    ...mapState({
      videoDetail: (state) => state.tutorLib.tutorLib.videoDetail
    }),
    getToken() {
      const token = this.$auth.getToken('local')
      const data = {}
      if (token !== '') {
        data.headers = {
          Authorization: token
        }
      }
      return data
    }
  },

  mounted() {
    this.modifyInfo.presenter = this.videoDetail.presenter
    this.modifyInfo.presentDt = this.videoDetail.presentDt
    this.modifyInfo.planSeriesDtlCd = this.videoDetail.planSeriesDtlCd
    this.modifyInfo.planSeriesCourse = this.videoDetail.planSeriesCourse
    this.modifyInfo.planSeriesStep = this.videoDetail.planSeriesStep
    this.modifyInfo.title = this.videoDetail.title
    this.fileNmRl = this.videoDetail.fileNmRl
    this.modifyInfo.stdAssistSeq = this.videoDetail.stdAssistSeq
  },
  methods: {
    ...mapActions({
      uploadFile: 'tutorLib/tutorLib/uploadFiles',
      deleteDetail: 'tutorLib/tutorLib/delDetail',
      modifyDetail: 'tutorLib/tutorLib/modifyDetail'
    }),
    async modDetail() {
      const modifyInfo = this.modifyInfo
      try {
        await this.modifyDetail({
          ...modifyInfo,
          fileData: this.uploadFiles,
          token: this.getToken
        })
      } catch (e) {
        alert(e)
      }
      alert('수정되었습니다.')
      this.$router.push('/tutorLib/lessonVideo')
    },
    fileUploaded() {
      const fd = this.$refs.fileUpload.files
      this.uploadFiles = fd
      this.fileNmRl = fd[0].name
      console.log(fd)
      // const iter = fd[Symbol.iterator]()
      // for (const a of iter) {
      //   // this.uploadFiles.push(a) // 여러개 파일일 경우 파일누적.
      // }
    },
    previewFile() {
      // this.uploadFiles.splice(index, 1) // 여러개 파일일 경우 삭제.
      // this.uploadFiles = ''
      // this.fileNmRl = ''
      this.$modal.show('open-video')
    },
    async delDetail() {
      if (!confirm('삭제하시곘습니까?')) {
        return false
      }
      try {
        await this.deleteDetail({ stdAssistSeq: this.videoDetail.stdAssistSeq })
      } catch (e) {
        alert(e)
      }
      alert('삭제되었습니다.')
      this.$router.push('/tutorLib/lessonVideo')
    }
  }
}
</script>

<style lang="scss" scoped></style>
