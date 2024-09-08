<template>
  <div class="container my-20">
    <div class="md:pl-28">
      <div class="flex items-center gap-4">
        <p class="text-[#e9FF93] text-5xl font-bold whitespace-nowrap">
          Projects
        </p>
        <div
          class="flex-grow border-b-2 mt-5 border-dotted border-[#e9FF93]"
          style="border-color: #e9ff93"
        ></div>
      </div>

      <!-- asdasdasdasd -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card"
        >
          <div class="card-content">
            <p class="text-white text-2xl font-bold mb-2">{{ project.name }}</p>
            <p class="text-gray-300 mb-4">{{ project.description }}</p>
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
            <div class="flex gap-2 mt-4">
              <span
                v-for="(stack, stackIndex) in project.stack"
                :key="stackIndex"
                class="text-gray-300 text-sm px-2 py-1 rounded bg-gray-700"
              >
                {{ stack }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-fit">
        <a
          href="https://github.com/DhitGT"
          target="_blank"
          class="text-[#e9FF93] text-md justify-center max-w-fit rounded mx-auto my-5 font-bold"
        >
          <div
            style="
              background-color: #e9ff93;
              color: #000;
              max-width: fit-content;
            "
            class="px-4 py-2 gap-3 mx-auto rounded-md my-20 flex items-center"
          >
            <span>View More</span>
            <v-icon color="#000">mdi-github</v-icon>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<script >
export default {
  data() {
    return {
      projects: [
        {
          name: 'Koppling Website',
          description: 'Just a ',
          github: 'https://github.com/yourusername/project-one',
          website: 'https://yourwebsite.com/project-one',
          stack: ['Vue.js', 'Nuxt.js', 'TailwindCSS'],
        },
        {
          name: 'Project Two',
          description: 'Description for Project Two',
          github: 'https://github.com/yourusername/project-two',
          website: 'https://yourwebsite.com/project-two',
          stack: ['React.js', 'Next.js', 'Bootstrap'],
        },
        {
          name: 'Project Three',
          description: 'Description for Project Three',
          github: 'https://github.com/yourusername/project-three',
          website: 'https://yourwebsite.com/project-three',
          stack: ['Laravel', 'MySQL', 'CSS'], // Example stack
        },
        // Add more projects as needed
      ],
    }
  },
  methods: {},
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
  padding: 20px;
  border-radius: 8px;
  border: 2px solid transparent;
}

.project-card:hover {
  border-color: #e9ff93;
  transition: 0.4s all;

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}
</style>
