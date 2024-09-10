<template>
  <v-container class="flex flex-col mb-10 justify-center h-screen relative">
    <div class="flex md:pl-28 flex-col gap-3 items-start justify-center">
      <div
        class="text-white font-bold leading-loose text-2xl"
        style="height: 1em; line-height: 1"
      >
        <span class="tracking-wider" style="letter-spacing: 0.3em">
          DHEEP | ADITYA
        </span>
      </div>
      <div>
        <div class="flex flex-wrap" style="height: max-content">
          <div
            class="mr-3 text-5xl md:text-8xl"
            style="font-weight: bold; line-height: 1em; height: fit-content"
          >
            I'm
          </div>

          <span
            ref="typedElement"
            class="text-5xl md:text-8xl text-[#e9FF93]"
            style="color: #e9ff93; font-weight: bold; height: fit-content"
          >
          </span>
        </div>
      </div>
      <p class="text-gray-400 font-bold text-lg font-jt-collect">
        Hi there! good to see you here. I'm a student who loves to build things.
      </p>
    </div>

    <!-- Scroll Down Icon Button -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
      <v-btn icon @click="scrollDown" class="bounce-animation flex flex-col">
        <div class="flex flex-col items-center">
          <span style="font-size: 0.7em">Scroll Down</span>
          <v-icon large class="text-white">mdi-chevron-down</v-icon>
        </div>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import Typed from 'typed.js'

export default {
  mounted() {
    const options = {
      strings: ['Student', 'Software Engineer'],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
      backDelay: 1000,
    }

    this.typed = new Typed(this.$refs.typedElement, options)
  },
  methods: {
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      })
    },
  },
  beforeDestroy() {
    if (this.typed) {
      this.typed.destroy()
    }
  },
}
</script>

<style>
/* Custom styles for the typed cursor */
.typed-cursor {
  font-size: 6em; /* Use the same CSS variable for font size */
  opacity: 1;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
  font-weight: bold;
  color: #e9ff93; /* Match the cursor color to your text color */
  height: 1em; /* Adjust the height to make the cursor taller */
  line-height: 1em; /* Ensures cursor height aligns with the text */
  width: 0.1em; /* Optional: Adjust the cursor thickness */
  display: inline-block;
  vertical-align: bottom; /* Align cursor with the text baseline */
}

.bounce-animation {
  animation: bounce 2s infinite;
}

@media (min-width: 768px) {
  .typed-cursor {
    font-size: 6em; /* Font size for medium screens and above */
  }
}

@media (max-width: 767px) {
  .typed-cursor {
    font-size: 3.5em; /* Font size for small screens */
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
