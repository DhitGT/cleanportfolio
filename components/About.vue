<template>
  <div class="container my-20 px-6">
    <div class="text-center mb-12">
      <p class="text-[#e9FF93] text-5xl font-bold">About Me</p>
      <div class="flex justify-center">
        <div
          class="flex-grow border-b-2 mt-5 border-dotted border-[#e9FF93]"
          style="border-color: #e9ff93"
        ></div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row items-center gap-10">
      <div class="md:w-1/3">
        <img
          src="me.jpg"
          alt="About Me Photo"
          class="rounded-full shadow-lg w-full"
        />
      </div>
      <div class="md:w-2/3">
        <h2 class="text-3xl font-bold mb-4">Hi, I'm Aditya Dwi Saputra</h2>
        <p class="text-gray-300 mb-6 text-justify">
          I am a Software Engineering student currently studying at
          <span class="text-gray-300"
            ><a
              href="https://www.smkn2kotabekasi.sch.id/"
              class="text-gray-300 underline visited:text-gray-300"
              target="_blank"
              >SMKN 2 Bekasi</a
            ></span
          >
          , with a passion for developing websites. With over 3 years of
          learning experience, I strive to bring innovative solutions and create
          impactful results. My journey has led me to intern at PT. Traspac
          Makmur Sejahtera for 6 months, where I worked as a Developer. During
          this time, I gained hands-on experience as a fullstack developer,
          using Nuxt 2 for frontend development and Laravel for backend
          services. I am dedicated to building efficient and scalable web
          applications and continuously improving my skills.
        </p>

        <h3 class="text-2xl font-semibold mb-2">Contact Me</h3>
        <div class="text-gray-300 flex items-center justify-start gap-5">
          <div>
            <a
              href="mailto:dheep.co@gmail.com"
              class="flex items-center text-[#e9FF93]"
            >
              <v-icon>mdi-email</v-icon>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/aditya-dwi-saputra-12018628b/"
              target="_blank"
              class="flex items-center text-[#e9FF93]"
            >
              <v-icon>mdi-linkedin</v-icon>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/DhitGT"
              target="_blank"
              class="flex items-center text-[#e9FF93]"
            >
              <v-icon>mdi-github</v-icon>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/d.dheepy/"
              target="_blank"
              class="flex items-center text-[#e9FF93]"
            >
              <v-icon>mdi-instagram</v-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
