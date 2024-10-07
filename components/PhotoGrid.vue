import type { LanguageServiceMode } from 'typescript';
<template>
  <div class="grid">
    <div class="column" v-for="column in columns">
      <div
        class="figure"
        v-if="status !== 'success'"
        v-for="val in Array.from({ length: 2 })"
      >
        <Skeleton />
      </div>
      <div class="figure" v-else v-for="photo in column" :key="photo.id">
        <div
          tabindex="0"
          role="button"
          class="image-link"
          @click="handleShowImage(photo.id)"
        >
          <img :src="photo.urls.small" :alt="photo.alt_description" />
          <div class="image-desc">
            <h2>{{ photo.user.name }}</h2>
            <p>{{ photo.user.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ImageModal :photo="selectedImage" @update:photo="selectedImage = $event" />
</template>

<script lang="ts" setup>
import type { Photo } from "~/typings";
import Skeleton from "@/components/Skeleton.vue";

const { photos } = defineProps<{ photos?: Photo[] | null; status: string }>();
const selectedImage = ref();

const numberOfColumns = window?.innerWidth < 999 ? 2 : 3;

const columns = computed(() => {
  const columns = Array.from({ length: numberOfColumns }, () => [] as Photo[]);
  photos?.forEach((photo, index) => {
    const columnIndex = index % numberOfColumns;
    columns[columnIndex].push(photo);
  });
  return columns;
});

const handleShowImage = (id: string) => {
  const photo = photos?.find((photo) => photo.id === id);
  if (photo) {
    selectedImage.value = photo;
    return;
  }
};
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
