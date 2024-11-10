<template>
  <div>
    <pre class="rounded-xl" v-html="highlightedCode"></pre>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-java' // Import Java language syntax
import 'prismjs/themes/prism.css' // Import a Prism theme of your choice

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: 'java', // Set the language to Java
    },
  },
  computed: {
    highlightedCode() {
      return Prism.highlight(
        this.code,
        Prism.languages[this.language],
        this.language
      )
    },
  },
}
</script>

<style scoped>
/* Optional: Customize your code block styling */
.container {
  padding: 1rem;
}
pre {
  background-color: #171616;
  padding: 1rem;
  overflow-x: auto;
}
</style>
