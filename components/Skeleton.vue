<template>
  <div class="skeleton">
    <div class="skeleton-placeholder"></div>
    <div class="skeleton-placeholder"></div>
  </div>
</template>

<script>
const height = Math.floor(Math.random());
</script>

<style lang="scss" scoped>
.skeleton {
  aspect-ratio: 1;
  background: #f6f6f6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.5rem;
  padding: 1rem;
  animation: shimmer 2s infinite;
  background: linear-gradient(
    to right,
    #f6f6f6 0%,
    #e0e0e0 20%,
    #f0f0f0 40%,
    #f6f6f6 100%
  );
  background-size: 800px 104px;
  position: relative;

  & > .skeleton-placeholder {
    background: #e7e7e7;
    width: 50%;
    height: 16px;
    border-radius: 2px;
    animation: shimmer 1s infinite;
    background: linear-gradient(to right, #ccc 0%, #e0e0e0 50%, #ccc 100%);
    background-size: 800px 104px;
    position: relative;
  }
  & > div.skeleton-placeholder:nth-of-type(2) {
    width: 30%;
  }
}

@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
