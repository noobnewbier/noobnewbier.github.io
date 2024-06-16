<template>
  <div>
    <h1>Tech Demo</h1>

    <div style="margin-bottom: 30px;">
      Here are some side projects I have worked on in the the past.
      <br>
      I created them mostly for fun and are by no means production ready, but feel free to have a peruse.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      More is available on
      <a target="_blank" href="https://github.com/noobnewbier?tab=repositories"
        >my repositories</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import techDemoData from "@/data/TechDemoData.ts";

export default Vue.extend({
  name: "TechDemos",
  components: {
    ProjectsList,
  },
  data: function() {
    return {
      projects: techDemoData,
    };
  },
});
</script>
