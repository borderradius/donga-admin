<template>
  <div>
    <!-- <h1>index</h1> -->
    <h1 class="font-semibold text-teal-400 text-lg uppercase tracking-widest">
      ag-grid
    </h1>
    <AgGridVue
      :grid-options="gridOptions"
      :default-col-def="gridOptions.defaultColDef"
      :column-defs="columnDefs"
      :row-data="lists"
      class="ag-theme-balham w-full"
      style="height: 300px;"
    />
  </div>
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

<style></style>
