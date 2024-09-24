<template>
  <v-app dark class="angled-gradient-background">
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
.angled-gradient-background {
  background: linear-gradient(
    300deg,
    /* Gradient angle */ black 0%,
    black 48%,
    #f2ffbc23 50%,

    black 100%
  );
  background-size: 300% 300%;
  animation: gradient-animation 20s ease infinite;
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
