<template>
  <div class="w-screen h-screen flex items-center">
    <div class="p-2 m-auto">
      <div class="block lg:flex bg-white lg:shadow-lg rounded-lg">
        <div class="w-full lg:w-1/3 flex lg:border-r border-gray-200">
          <div class="m-auto rounded-full">
            <img
              src="https://parsinta.com/logo/blue.png"
              alt=""
              class="w-12 lg:w-48"
            />
            <div
              class="block lg:hidden text-2xl text-primary hover:text-primary tracking-wide font-semibold uppercase"
            >
              MDF
            </div>
          </div>
        </div>
        <div class="w-full lg:w-2/3 px-6 py-16">
          <div class="mb-4 font-light tracking-widest text-2xl">LOGIN</div>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(signin)">
              <div class="mb-4">
                <label for="admrId" class="block mb-2 text-sm text-gray-800"
                  >ID</label
                >
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|id"
                  name="아이디"
                  immediate
                >
                  <input
                    id="admrId"
                    v-model="user.admrId"
                    type="text"
                    name="admrId"
                    class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  />
                  <span class="text-red-500 text-xs mt-2">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="mb-4">
                <label for="admrPwd" class="block mb-2 text-sm text-gray-800"
                  >Your password</label
                >
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                  name="비밀번호"
                  immediate
                >
                  <input
                    id="userPassword"
                    v-model="user.admrPwd"
                    type="password"
                    name="userPassword"
                    class="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    @keyup.enter="signin"
                  />
                  <span class="text-red-500 text-xs mt-2">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="mb-4">
                <ValidationProvider v-slot="v" rules="min:3" name="min">
                  <input v-model="min" type="text" @input="inputCheck(v)" />
                  <span>{{ v.errors[0] }}</span>
                </ValidationProvider>
              </div>
              <!-- <label class="mb-4 flex items-center">
              <input
                id="remeber"
                type="checkbox"
                class="form-checkbox"
                name="remeber"
                checked
              />
              <span class="ml-2">I want to remember you ?</span>
            </label> -->
              <div class="block md:flex items-center justify-between">
                <button
                  type="submit"
                  class="align-middle bg-blue-500 hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded-lg inline-block shadow-lg hover:outline-none hover:shadow-outline active:outline-none focus:outline-none"
                >
                  LOGIN
                </button>
                <!-- <n-link
                class="text-gray-600 hover:text-gray-700 no-underline block"
                to="/"
                >Move main</n-link
              > -->
                <!-- <a
                class="text-gray-600 hover:text-gray-700 no-underline block"
                href="/password/reset"
              >
                Forgot Your Password?
              </a> -->
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
    <!-- <div class="w-full max-w-xs m-auto">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="ID">
            ID
          </label>
          <input
            id="ID"
            v-model="user.admrId"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter ID"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            v-model="user.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="signin"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <n-link
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            to="/"
            >Move main</n-link
          >
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2019 Minigate Corp. All rights reserved.
      </p>
    </div> -->
  </div>
</template>

<script>
export default {
  layout: 'clear',
  data() {
    return {
      user: {
        admrId: 'admin',
        admrPwd: '1111'
      },
      min: ''
    }
  },
  methods: {
    async signin() {
      try {
        await this.$store.dispatch('user/login', this.user)
      } catch (e) {
        alert('로그인 실패')
        return false
      }
      this.$router.push('/dashboard')
    },
    inputCheck(v) {
      console.log(v)
      console.log(this)
    }
  }
}
</script>

<style lang="scss" scoped></style>
