<template>
  <div class="w-full mx-auto">
    <div class="bg-white shadow rounded">
      <table class="table-basic">
        <thead>
          <tr>
            <th
              v-for="(item, index) in tHeader"
              :key="index"
              :colspan="item.colspan"
            >
              {{ item.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(cont, index) in tBody" :key="index">
              {{ cont }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tHeader: {
      type: Array,
      default: () => {
        return []
      }
    },
    tBody: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
