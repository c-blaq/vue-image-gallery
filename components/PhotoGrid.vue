import type { LanguageServiceMode } from 'typescript';
<template>
  <div class="grid">
    <div class="column" v-for="column in columns">
      <div class="figure" v-for="photo in column">
        <NuxtLink :to="`/photo/${photo.desc}`" class="image-link">
          <img :src="photo.imageSrc" alt="" />
          <div class="image-desc">
            <h2>John Doe</h2>
            <p>Lagos, Nigeria</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const Photos: Record<string, string>[] = [
  {
    imageSrc: "/images/dogs.jpeg",
    desc: "this is a dog",
  },
  {
    imageSrc: "/images/wall.jpg",
    desc: "this is a wall",
  },
  {
    imageSrc: "/images/dogs.jpeg",
    desc: "this is a dog",
  },
  {
    imageSrc: "/images/dog2.jpg",
    desc: "this is a phone",
  },
  {
    imageSrc: "/images/wall.jpg",
    desc: "this is a dog",
  },
  {
    imageSrc: "/images/samsung.jpg",
    desc: "this is a sam",
  },
];

const numberOfColumns = window?.innerWidth < 999 ? 2 : 3;

const columns = computed(() => {
  const columns = Array.from(
    { length: numberOfColumns },
    () => [] as Record<string, string>[]
  );
  Photos?.forEach((photo, index) => {
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

    & > p {
      color: #cfcece;
      font-size: 0.8rem;
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
