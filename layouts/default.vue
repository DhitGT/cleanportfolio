<template>
  <v-app dark class="gradient-background">
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
.gradient-background {
  background: linear-gradient(
    300deg,
    #000000,
    #000000,
    #303030,
    #000000,
    #000000
  );
  background-size: 300% 300%;
  animation: gradient-animation 30s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
