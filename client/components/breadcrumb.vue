<template>
  <div class="breadcrumb bg-white shadow-sm w-full">
    <ul class="flex">
      <li v-for="(item, index) in acc" :key="index" class="mr-1">
        <span>{{ item.name }}</span>
        <!-- <span v-if="!item.link">{{ item.name }}</span>
        <n-link v-else :to="item.link">
          <span>{{ item.name }}</span>
        </n-link> -->
        <font-awesome-icon
          v-if="index + 1 !== acc.length"
          :icon="['fas', 'caret-right']"
          class="text-xs mx-1"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { lnbData } from '../static/lnbData.js'
import { go, map, filter } from '../plugins/fx.js'

export default {
  data() {
    return {
      acc: []
    }
  },
  watch: {
    $route(newValue) {
      // 로그인페이지 이동시 경로감시 안하기.
      const path = newValue.path.split('/')
      if (path[1] === 'user') return false
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    // 현재경로로 breadcrumb 만들기
    getBreadcrumb() {
      this.acc = []
      const paths = this.$route.path.split('/')
      const iter = paths[Symbol.iterator]()
      iter.next()

      const a = iter.next().value
      if (a) this.getDepth1(a, lnbData)

      const b = iter.next().value
      if (b) this.getDepth2(a, b, lnbData)
    },
    // 현재경로에서 1뎁스 매칭시켜서 한글메뉴로 배열에 누적
    getDepth1(a, data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].path === a)
          this.acc.push({ name: data[i].menu1, link: data[i].link })
      }
    },
    // 현재경로에서 2뎁스 매칭시켜서 한글메뉴로 배열에 누적
    getDepth2(a, b, data) {
      const aa = go(
        data,
        filter((arg) => arg.path === a),
        map((arg) => arg.child)
      )
      const iter2 = [...aa[0]]
      for (const item of iter2) {
        if (item.path === b)
          this.acc.push({ name: item.menu2, link: item.link })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
