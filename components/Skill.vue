<template>
  <div class="container my-20">
    <div class="md:pl-28">
      <div class="flex items-center gap-4">
        <p class="text-[#e9FF93] text-5xl font-bold whitespace-nowrap">
          Skills
        </p>
        <div
          class="flex-grow border-b-2 mt-5 border-dotted border-[#e9FF93]"
          style="border-color: #e9ff93"
        ></div>
      </div>

      <!-- Loop through each skill category -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div
          v-for="(category, index) in skillCategories"
          :key="index"
          class="b p-4"
        >
          <p class="text-white font-semibold text-xl mb-2">
            {{ category.name }}
          </p>
          <div class="flex gap-3 flex-wrap">
            <!-- Loop through each skill in the category -->
            <p
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
              class="text-gray-300 px-2 py-1 rounded"
            >
              {{ skill }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Define your skill categories and skills here
      skillCategories: [
        {
          name: 'Languages',
          skills: ['HTML/CSS', 'JavaScript', 'PHP', 'Java', 'c#'],
        },
        {
          name: 'Frameworks',
          skills: [
            'Vue.js',
            'Nuxt.js',
            'React.js',
            'Laravel',
            'TailwindCSS',
            'Bootstrap',
          ],
        },
        {
          name: 'Database Services',
          skills: ['MySQL', 'PostgreSQL', 'Firebase'],
        },
        {
          name: 'Tools',
          skills: ['Git', 'PostMan', 'Notion'],
        },
        // Add more categories and skills as needed
      ],
    }
  },
}
</script>
