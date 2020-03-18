<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      지도 동영상 등록
    </h2>
    <div slot="content-container">
      <!-- <div
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
      > -->
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-first-name"
          >
            발표자
          </label>
          <input
            id="grid-first-name"
            v-model="registInfo.presenter"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            type="text"
            placeholder="Jane"
          />
          <p class="text-red text-xs italic">Please fill out this field.</p>
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-last-name"
          >
            발표일
          </label>
          <input
            id="grid-last-name"
            v-model="registInfo.presentDt"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            type="text"
            placeholder="날짜선택"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-password"
          >
            제목
          </label>
          <input
            id="grid-password"
            v-model="registInfo.title"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            type="text"
            placeholder="제목"
          />
          <p class="text-grey-dark text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <!-- <div class="-mx-3 md:flex mb-6">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-password"
          >
            Password
          </label>
          <input
            id="grid-password"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            type="password"
            placeholder="******************"
          />
          <p class="text-grey-dark text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div> -->
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
              v-model="registInfo.planSeriesDtlCd"
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
          <!-- <input
            id="grid-city"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            type="text"
            placeholder="Albuquerque"
          /> -->
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
              v-model="registInfo.planSeriesCourse"
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
              v-model="registInfo.planSeriesStep"
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
          <!-- <input
            id="grid-zip"
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            type="text"
            placeholder="90210"
          /> -->
        </div>
      </div>
      <div class="-mx-3 md:flex mb-2">
        <div class="md:w-1/2 px-3">
          <div class="border border-dashed border-gray-500 relative">
            <ValidationProvider
              ref="provider"
              v-slot="{ validate, errors }"
              rules="image"
              name="파일업로드"
            >
              <input
                ref="fileUpload"
                type="file"
                multiple
                class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
                @change="fildUploaded"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
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
          <ul>
            <!-- <li v-if="uploadFiles">
              {{ uploadFiles[0].name }}
              <button @click="delFile" class="btn btn-sm btn-del">
                del
              </button>
            </li> -->
            <li v-for="(item, index) in uploadFiles" :key="index" class="mb-2">
              {{ item.name }}
              <button class="btn btn-sm btn-del" @click="delFile(index)">
                del
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button class="btn" @click="regist">등록</button>
      <n-link class="btn" to="/tutorLib/lessonVideo">목록</n-link>
    </div>
    <!-- </div> -->
  </ContentCard>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      uploadFiles: '',
      registInfo: {
        presenter: '발표자',
        presentDt: '20200117',
        planSeriesDtlCd: 'EBP',
        planSeriesCourse: 'A',
        planSeriesStep: '1',
        title: '제목입니다'
      }
    }
  },
  computed: {
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
  methods: {
    ...mapActions({
      uploadFile: 'tutorLib/tutorLib/uploadFiles'
    }),
    async fildUploaded(e) {
      const { valid } = await this.$refs.provider.validate(e)

      if (valid) {
        const fd = this.$refs.fileUpload.files
        this.uploadFiles = fd
      }

      // const iter = fd[Symbol.iterator]()
      // for (const a of iter) {
      //   // this.uploadFiles.push(a) // 여러개 파일일 경우 파일누적.
      // }
    },
    delFile() {
      // this.uploadFiles.splice(index, 1) // 여러개 파일일 경우 삭제.
      this.uploadFiles = ''
    },
    async regist() {
      const registInfo = this.registInfo
      try {
        await this.uploadFile({
          ...registInfo,
          fileData: this.uploadFiles,
          token: this.getToken
        })
      } catch (e) {
        alert(e)
      }
      alert('등록되었습니다.')
      this.$router.push('/tutorLib/lessonVideo')
    }
  }
}
</script>
