<template>
  <div>
    <ag-grid-vue
      style="width: 500px; height: 300px;"
      class="ag-theme-material"
      :column-defs="columnDefs"
      :row-data="rowData"
    />
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'

export default {
  components: {
    'ag-grid-vue': AgGridVue
  },
  data() {
    return {
      columnDefs: null,
      rowData: null
    }
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ]

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]
  }
}
</script>

<style lang="scss">
/* @import 'ag-grid-community/dist/styles/ag-grid.css'; */
/* @import 'ag-grid-community/dist/styles/ag-theme-material.css'; */
</style>
