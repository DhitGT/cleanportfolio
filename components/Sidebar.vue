<template>
  <div>
    <!-- Desktop Sidebar -->
    <div class="max-w-fit mr-16 hidden md:flex">
      <v-row>
        <v-col cols="12" md="3" class="sidebar">
          <div
            class="ml-20 flex flex-col mt-7 items-center justify-between h-screen"
          >
            <div class="mb-8 flex py-4 h-full flex-col items-center">
              <a href="/" class="text-white font-bold text-2xl mb-8">
                <v-img src="dheepLogo.jpg" max-width="50" max-height="50" />
              </a>
              <div class="flex flex-col justify-between items-center mb-16">
                <div
                  v-for="(item, index) in menuItems"
                  :key="index"
                  class="text-gray-400 flex items-center justify-center text-md hover:text-yellow-100 transition-colors delay-150"
                >
                  <span
                    style="transform: rotate(-90deg)"
                    class="block transform rotate-[-90deg] items-center font-bold cursor-pointer justify-center hover:text-yellow-100 transition-colors delay-150"
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
                  href="https://github.com/DhitGT"
                  target="_blank"
                  class="text-gray-400 my-2 max-height-fit"
                >
                  <v-icon>mdi-github</v-icon>
                </a>
                <a
                  href="https://www.instagram.com/d.dheepy/"
                  target="_blank"
                  class="text-gray-400 my-2 max-height-fit"
                >
                  <v-icon>mdi-instagram</v-icon>
                </a>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <!-- Mobile Navbar -->
    <v-app-bar app dark v-if="$vuetify.breakpoint.mdAndDown">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list>
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            :to="`/${item.toLowerCase()}`"
          >
            <v-list-item-content>{{ item }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ['Home', 'Skills', 'Projects', 'Cert'],
      drawer: false,
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
