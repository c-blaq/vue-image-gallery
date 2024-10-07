<template>
  <form method="get" action="/search">
    <div class="searchIcon-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          fill="#253858"
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
    </div>
    <input
      name="q"
      type="search"
      placeholder="Search for photos"
      class="search-input"
    />
  </form>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
form {
  width: 100%;
  max-width: 1158px;
  margin: 0 auto;
  position: relative;

  & > .searchIcon-container {
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    bottom: 40px;
    left: 1.5rem;
    transform: translateY(50%);
  }

  & > .search-input {
    display: block;
    width: 100%;
    height: 80px;
    appearance: none;
    border: none;
    border-radius: 0.8rem;
    padding: 0 1rem 0 4rem;
    box-shadow: 0px 0px 1px gray;
    font-size: 1.2rem;
    color: #253858;

    &::placeholder {
      color: #253858;
    }
  }

  @media (max-width: 768px) {
    & > .searchIcon-container {
      bottom: 25px;
    }

    & > .search-input {
      height: 50px;
      font-size: 0.9rem;
    }
  }
}
</style>
