<template>
  <div class="container my-20">
    <div class="md:pl-28">
      <div class="flex items-center gap-4">
        <p class="text-[#e9FF93] text-5xl font-bold whitespace-nowrap">
          Projects
        </p>
        <div
          class="flex-grow border-b-2 mt-5 border-dotted border-[#e9FF93]"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <div
            class="card-content md:p-3 p-2 flex flex-col justify-between h-full"
          >
            <div class="image-wrapper">
              <img
                :src="project.image"
                alt="Project image"
                class="w-full h-64 object-cover"
              />
              <div class="overlay text-center text-white">
                <p class="mt-20">Click to Visit Website</p>
              </div>
            </div>
            <div class="flex flex-col h-[100%] my-3 justify-between">
              <div>
                <p class="text-white text-2xl font-bold mb-2">
                  {{ project.name }}
                </p>
                <p class="text-gray-300 mb-4">{{ project.description }}</p>
              </div>
              <div class="mt-auto" style="margin-top: auto">
                <div class="flex items-center gap-3 justify-end">
                  <a
                    :href="project.github"
                    target="_blank"
                    class="text-[#e9FF93] text-2xl"
                  >
                    <v-icon>mdi-github</v-icon>
                  </a>
                  <a
                    :href="project.website"
                    target="_blank"
                    class="text-[#e9FF93] text-2xl"
                  >
                    <v-icon>mdi-web</v-icon>
                  </a>
                </div>
                <div class="flex gap-2 mt-4 flex-wrap">
                  <span
                    v-for="(stack, stackIndex) in project.stack"
                    :key="stackIndex"
                    class="text-gray-300 text-sm px-2 py-1 rounded"
                  >
                    {{ stack }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center my-16">
        <v-btn href="https://github.com/DhitGT" target="_blank" color="#e9FF93">
          <div class="flex mx-auto items-center justify-center gap-2">
            <span class="text-black">View More</span>
            <v-icon color="black">mdi-github</v-icon>
          </div>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Koppling Website',
          description:
            'Koppling (Komunitas Pelajar Pecinta Lingkungan) is an extracurricular group at SMK Negeri 2 Kota Bekasi dedicated to fostering environmental awareness and inspiring student-led conservation actions',
          github: 'https://github.com/DhitGT/koppling',
          website: 'https://koppling.site',
          image: '/koppling-website.PNG', // Use actual image path or URL
          stack: ['Vue.js', 'Nuxt.js', 'TailwindCSS', 'Vuetify', 'Firebase'],
        },
        {
          name: 'Sambal Ika Website',
          description:
            'A personal business website for Sambal Pecel by Mbak Ika, showcasing a variety of sambal products with a clean and user-friendly design.',
          github: 'https://github.com/DhitGT/sambal-mbak-ika',
          website: 'https://sambal.ikaa.shop/',
          image: 'sambal-ika-website.PNG',
          stack: ['Vue.js', 'Nuxt.js', 'TailwindCSS', 'Vuetify'],
        },
        {
          name: 'Ritsu Clothing',
          description:
            'Explore our exclusive collection and personalize your look with custom apparel designs. From trendy graphic tees to one-of-a-kind clothing tailored to your taste, Ritsu offers the perfect blend of style and individuality.',
          github: 'https://github.com/DhitGT/ritsu',
          website: 'https://ritsu.dheep.site',
          image: 'ritsu-website.PNG',
          stack: ['HTML', 'CSS', 'TailwindCSS'],
        },
        {
          name: 'Uncolonized Game',
          description:
            'Dive into Uncolonized Game and conquer challenging levels inspired by Indonesia’s fight for freedom. Celebrate the spirit of liberation and test your skills as you journey through this historic adventure.',
          github: 'https://github.com/DhitGT/1945',
          website: 'https://dhitgt.github.io/1945/index.html',
          image: 'uncolonized-game.PNG',
          stack: ['HTML', 'Javascript', 'Bootstrap'],
        },
      ],
    }
  },
}
</script>

<style scoped>
.project-card {
  perspective: 1000px;
  background-color: #1e1e1e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  border: 2px solid transparent;
  margin: 10px;
  transition: 0.4s all;
}

.card-content {
  border-radius: 8px;
  border: 2px solid transparent;
}

.image-wrapper {
  position: relative;
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.image-wrapper:hover .overlay {
  opacity: 1;
}

.project-card:hover {
  border-color: #e9ff93;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}
</style>
