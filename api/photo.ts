import type { Photo } from "~/typings";
import { useUnsplashApi } from "~/composables/useUnsplashApi";

// get photos by query - search
export function useSearchPhoto(query: string) {
  return useUnsplashApi<{ results: Photo[] }>(
    {
      url: `/search/photos`,
      params: {
        query,
        per_page: 8,
      },
    },
    {
      key: "getPhoto",
      server: false,
    }
  );
}

// fetch a photo by id
export function useGetPhoto(id: string) {
  return useUnsplashApi<Photo>(
    {
      url: `/photos/${id}`,
    },
    {
      key: "getPhotoById",
      server: false,
    }
  );
}
