<template>
  <div class="hello">
    <h1 class="text-5xl font-semibold">Mes référentiels</h1>
    <div v-for="repo in repositoryOwner.repositories.edges" :key="repo.id">
      <p>{{ repo.node.createdAt }}</p>
      <h3>{{ repo.node.name }}</h3>
      <a :href="repo.node.url">Voir le référentiel</a>
    </div>
  </div>
</template>

<script>
import { sample } from "../queries/sample";

export default {
  name: "HelloWorld",
  apollo: {
    repositoryOwner: sample
  },
  data() {
    return {
      repositoryOwner: []
    }
  },
};
</script>

<style scoped>

</style>
