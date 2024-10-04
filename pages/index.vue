<template>
  <PhotoGrid :photos="photos?.results" :status="status" />
</template>

<script setup lang="ts">
import PhotoGrid from "~/components/PhotoGrid.vue";
import { useSearchPhoto } from "~/api/photo";

const { data: photos, status } = useSearchPhoto("African");
</script>

<style scoped></style>
