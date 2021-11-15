<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      Here are some games related project I've contributed to either in a
      commercial environment or in my spare time.
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
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function() {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
