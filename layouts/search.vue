<script setup>
const route = useRoute();
import { useSearchPhoto } from "@/api/photo";
const { query } = route;
const { status } = useSearchPhoto(query.q);
</script>

<template>
  <header>
    <h1>
      <span v-if="status !== 'success'">Searching</span>
      <span v-else>Search Results</span>
      for
      <span color="grey">{{ route.query.q }}</span>
    </h1>
  </header>
  <main>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
header {
  background-color: #dde2e9;
  padding: 0 1rem;
  min-height: 300px;
  color: #253858;
  display: flex;
  align-items: center;

  h1 {
    max-width: 1158px;
    width: 100%;
    text-align: left;
    margin: 0 auto;
    color: #253858;
    font-size: 2.5rem;
  }
}

main {
  padding: 0 1rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.5rem !important;
  }
}
</style>
