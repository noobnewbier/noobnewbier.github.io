<template>
  <div>
    <h1>Games</h1>

    <div style="margin-bottom: 30px;">
      Here are some commercial games I have worked on in the past.
      <br>
      My experience spanned across different platforms, from PC to mobile, to niche platform like Apple TV for Apple Arcade.
    </div>

    <ProjectsList v-bind:projects="projects" />
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
