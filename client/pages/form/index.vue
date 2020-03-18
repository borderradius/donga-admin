<template>
  <ContentCard size="full">
    <h2 slot="content-title">
      Form
    </h2>
    <span slot="content-container">
      validate + form(with component) + submit
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submitEvent)">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="아이디"
            immediate
          >
            <div class="overflow-hidden">
              <Input
                id="searchText"
                v-model="inputData"
                type="text"
                placeholder="검색어를 입력해주세요."
                size="lg"
                class="float-left w-140"
              />
            </div>
            <span>{{ errors[0] }}</span>
          </ValidationProvider>
          <Select
            v-model="searchParam.srchYy"
            :option-data="yearOptions"
            default-value="0"
            default-name="년도선택"
            option-name-key="year"
            option-value-key="year"
            class="float-left w-140 mr-1"
          />
          <Btn label="등록" type="register" size="sm" mode="submit" />
        </form>
      </ValidationObserver>
    </span>
  </ContentCard>
</template>

<script>
export default {
  data() {
    return {
      inputData: 'this is input data',
      yearOptions: [{ year: '2019' }, { year: '2020' }],
      searchParam: {
        srchYy: ''
      }
    }
  },
  methods: {
    submitEvent() {
      console.log('submitted!!!', this.inputData, this.searchParam.srchYy)
    }
  }
}
</script>
