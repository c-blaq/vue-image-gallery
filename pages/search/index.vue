<template>
  <h1 v-if="photos?.results.length === 0">
    Search result for {{ query.q }} not found!
  </h1>
  <PhotoGrid v-else :photos="photos?.results" />
</template>

<script setup lang="ts">
import PhotoGrid from "@/components/PhotoGrid.vue";
import { useSearchPhoto } from "@/api/photo";
const route = useRoute();
const { query } = route;
const { data: photos, status } = useSearchPhoto(query.q as string);
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-top: 2rem;
}
</style>
