<template>
  <div />
</template>

<script>
// import { mapState } from 'vuex'
// import {
//   columnDefs,
//   gridOptions,
//   defaultOptions
// } from '../static/tableHeader/memberList.js'

export default {
  // created() {
  //   console.log('aaa')
  //   this.$router.push('/dashboard')
  // }
  fetch({ redirect }) {
    redirect(301, '/dashboard')
  }
  // data() {
  //   return {
  //     columnDefs: {},
  //     result: '',
  //     gridOptions: '',
  //     defaultOptions: ''
  //   }
  // },
  // computed: {
  //   ...mapState({
  //     lists: (state) => state.contents.lists
  //   })
  // },
  // async asyncData({ store }) {
  //   await store.dispatch('contents/lists')
  // },
  // beforeMount() {
  //   this.columnDefs = columnDefs
  //   this.gridOptions = gridOptions
  //   this.defaultOptions = defaultOptions
  // }
}
</script>

<style lang="scss">
/* @import 'ag-grid-community/dist/styles/ag-grid.css';
@import 'ag-grid-community/dist/styles/ag-theme-material.css'; */
</style>
