<template>
  <div class="bg-green-600 max-w-fit mr-16">
    <v-row>
      <v-col cols="12" md="3" class="sidebar">
        <div
          class="ml-20 bg-green-600 flex flex-col mt-7 items-center justify-between h-screen"
        >
          <div class="mb-8 flex py-4 h-full flex-col items-center">
            <a href="/" class="text-white font-bold text-2xl mb-8">
              <v-img
                src="https://placehold.co/200"
                max-width="40"
                max-height="40"
              />
            </a>
            <div class="flex flex-col justify-between items-center mb-16">
              <div
                v-for="(item, index) in menuItems"
                :key="index"
                class="text-gray-400 flex items-center justify-center text-md hover:text-yellow-100 transition-colors delay-150"
              >
                <span
                  class="block transform rotate-90 items-center font-bold cursor-pointer justify-center hover:text-yellow-100 transition-colors delay-150"
                >
                  {{ item }}
                </span>
              </div>
            </div>

            <div
              class="flex flex-col justify-center items-center"
              style="max-height: 6em"
            >
              <a
                href="https://github.com/ardptr"
                target="_blank"
                class="text-gray-400 my-2 max-height-fit"
              >
                <v-icon>mdi-github</v-icon>
              </a>
              <a
                href="https://www.instagram.com/ardptr/"
                target="_blank"
                class="text-gray-400 my-2 max-height-fit"
              >
                <v-icon>mdi-instagram</v-icon>
              </a>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="9">
        <div class="main-content">
          <router-view></router-view>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ['Home', 'Skills', 'Projects', 'Cert'],
    }
  },
}
</script>

<style scoped>
.sidebar {
  max-width: 5em;
  position: fixed;
}

.main-content {
}
</style>
