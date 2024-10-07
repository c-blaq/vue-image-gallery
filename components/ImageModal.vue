<template>
  <!-- why not use a Nuxt UI dialog?  -->
  <!-- Yeah, Nuxt UI dialog is prefable, handles accessibility features and so on. The idea behind this approach is to show my skill on semantic and basic accessibility - and also to test my knowledge on how to handle the close func -->
  <Transition name="modal-fade">
    <dialog
      v-if="$props.photo"
      @click.self="handleCloseModal"
      :aria-labelledby="($props.photo.alt_description as string)"
    >
      <div class="dialog-content">
        <button
          class="close"
          aria-label="close image modal"
          @click="handleCloseModal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#fff"
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
            />
          </svg>
        </button>
        <img
          :src="$props.photo.urls.regular"
          :alt="$props.photo.alt_description"
          loading="lazy"
        />
        <div class="dialog-content__description">
          <h2>{{ $props.photo.user.name }}</h2>
          <p>{{ $props.photo.user.location }}</p>
        </div>
      </div>
    </dialog>
  </Transition>
</template>

<script lang="ts" setup>
import type { Photo } from "@/typings";
defineProps<{ photo: Photo }>();
const emit = defineEmits<{
  (event: "update:photo", value: Photo | null): void;
}>();

const handleCloseModal = () => {
  emit("update:photo", null);
};

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleCloseModal);
});
</script>

<style lang="scss" scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}

dialog {
  position: fixed;
  padding: 0 20px;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100dvw;
  height: 100dvh;

  .dialog-content {
    border-radius: 20px;
    overflow-y: auto;
    background: white;
    max-height: fit-content;
    width: 100%;
    height: 80%;
    max-height: 768px;
    max-width: 1158px;
    display: flex;
    flex-direction: column;

    button.close {
      position: absolute;
      top: 10%;
      right: 10%;
      z-index: 100;
      appearance: none;
      background: none;
      border: none;
      width: 16px;
      height: 16px;
      font-weight: 300;
      margin-right: 30px;
    }

    img {
      width: 100%;
      height: 80%;
      max-height: 600px;
      background: #eceaea;
      object-fit: cover;
    }

    div.dialog-content__description {
      padding: 1.5rem;

      h2 {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
