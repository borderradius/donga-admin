<template>
  <div class="search-box">
    <table class="table-auto w-full">
      <tbody>
        <slot name="search-condition1" />
        <slot name="search-condition2" />
        <slot name="search-condition3" />
      </tbody>
    </table>
    <div class="flex justify-center my-6">
      <!-- <button v-if="regist" @click="$emit('register')" class="btn mr-2">
        등록
      </button> -->
      <Btn
        v-if="regist"
        label="등록"
        class="mr-2"
        type="register"
        @btnClick="register"
      />
      <Btn label="검색" @btnClick="search" />
      <!-- <button @click="$emit('search')" class="btn">
        검색
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    regist: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    search() {
      this.$emit('search')
    },
    register() {
      this.$emit('register')
    }
  }
}
</script>
