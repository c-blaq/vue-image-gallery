<script setup>
import SearchBar from "@/components/SearchBar.vue";
</script>

<template>
  <header>
    <SearchBar />
  </header>
  <main>
    <slot />
  </main>
  <footer></footer>
</template>

<style lang="scss" scoped>
header {
  background-color: #dde2e9;
  padding: 0 1rem;
  min-height: 300px;
  color: #253858;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  padding: 0 1rem;
}
</style>
