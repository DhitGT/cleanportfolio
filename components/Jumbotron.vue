<template>
  <v-container class="flex flex-col justify-center h-screen">
    <div class="flex pl-28 flex-col gap-3 items-start justify-center">
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
            class="mr-3 text-8xl"
            style="font-weight: bold; line-height: 1em; height: fit-content"
          >
            I'm
          </div>

          <span
            ref="typedElement"
            class="text-8xl text-[#e9FF93]"
            style="color: #e9ff93; font-weight: bold; height: fit-content"
          >
          </span>
        </div>
      </div>
      <p class="text-gray-400 font-bold text-lg font-jt-collect">
        Hi there! good to see you here. I'm a student who loves to build things.
      </p>
    </div>
  </v-container>
</template>

<script>
import Typed from 'typed.js'

export default {
  mounted() {
    const options = {
      strings: ['Student', 'Fullstack Developer', 'Designer'],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
      backDelay: 1000,
    }

    this.typed = new Typed(this.$refs.typedElement, options)
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
</style>
