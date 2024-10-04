import type { LanguageServiceMode } from 'typescript';
<template>
  <div class="grid">
    <div class="column" v-for="column in columns">
      <div class="figure" v-for="photo in column">
        <NuxtLink :to="`/photo/${photo.id}`" class="image-link">
          <img :src="photo.urls.small" :alt="photo.alt_description" />
          <div class="image-desc">
            <h2>{{ photo.user.name }}</h2>
            <p>{{ photo.user.location }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Photo } from "~/typings";
const { photos } = defineProps<{ photos?: Photo[] | null }>();

const numberOfColumns = window?.innerWidth < 999 ? 2 : 3;

const columns = computed(() => {
  const columns = Array.from({ length: numberOfColumns }, () => [] as Photo[]);
  photos?.forEach((photo, index) => {
    const columnIndex = index % numberOfColumns;
    columns[columnIndex].push(photo);
  });
  return columns;
});
</script>

<style lang="scss" scoped>
$gridGap: 50px;

.grid {
  display: grid;
  grid-template-columns: repeat(v-bind(numberOfColumns), 1fr);
  grid-template-rows: masonry;
  max-width: 917px;
  margin: 0 auto;
  gap: $gridGap;
  position: relative;
  top: -40px;

  @media (max-width: 999px) {
    gap: 20px;
  }
}

.image-link {
  position: relative;
  border-radius: 1rem;
  display: block;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  }

  .image-desc {
    position: absolute;
    bottom: 1.5rem;
    left: 1.25rem;
    color: #fcfcfc;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;

    & > h2 {
      text-transform: capitalize;
    }

    & > p {
      color: #cfcece;
      font-size: 0.9rem;
    }
  }
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.column {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: $gridGap;

  @media (max-width: 999px) {
    gap: 20px;
  }
}
</style>
