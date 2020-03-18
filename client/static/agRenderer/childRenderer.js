import Vue from 'vue'

export default Vue.extend({
  methods: {
    callParentMethod() {
      this.params.context.componentParent.methodFromParent(
        `Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`
      )
    }
  },
  template: `
  <span>
    <button style="height: 20px; line-height: 0.5" v-on:click="callParentMethod" class="btn btn-info">call parent method</button>
  </span>
  `
})
