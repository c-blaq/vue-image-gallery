<template>
  <p v-if="photos?.results.length === 0">
    Search result for {{ query.q }} not found!
  </p>
  <PhotoGrid v-else :photos="photos?.results" :status="status" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "search",
});
import PhotoGrid from "@/components/PhotoGrid.vue";
import { useSearchPhoto } from "@/api/photo";
const route = useRoute();
const { query } = route;
const { data: photos, status } = useSearchPhoto(query.q as string);
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  margin-top: 2rem;
}
</style>
