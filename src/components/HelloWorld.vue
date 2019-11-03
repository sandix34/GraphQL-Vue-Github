<template>
  <div class="w-11/12 m-auto">
    <h1 class="text-5xl font-semibold p-5">Mes référentiels</h1>
    <div class="flex flex-wrap">
      <div
        v-for="repo in repositoryOwner.repositories.edges"
        :key="repo.id"
        class="bg-gray-100 customshadow rounded-lg w-64 m-8 p-4"
      >
        <p class="text-left pb-4">{{ formatDate(repo.node.createdAt) }}</p>
        <h3 class="text-left text-xl font-bold pb-2">{{ repo.node.name }}</h3>
        <p
          v-html="repo.node.descriptionHTML"
          class="text-left leading-snug text-xl text-gray-700"
        ></p>
        <a
          :href="repo.node.url"
          class="text-center bg-gray-200 rounded-full block mt-4 text-gray-900 hover:underline w-40 p-1"
          >Voir le référentiel</a
        >
      </div>
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
    };
  },
  methods: {
    // convertir une date ISO
    formatDate(date) {
      let isoDate = date;
      let d = new Date(isoDate);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };

      return d.toLocaleDateString("fr-FR", options);
    }
  }
};
</script>

<style scoped>
.customshadow {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
}
</style>
