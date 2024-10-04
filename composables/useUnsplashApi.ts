import type { AsyncDataOptions } from "#app";
import axios, { type AxiosRequestConfig } from "axios";

// this does not call the unsplash API directly, it calls the api in the /server directory
export function useUnsplashApi<T>(
  config: AxiosRequestConfig & { url: string },
  options?: AsyncDataOptions<T> & { key?: string | string[] }
) {
  const { unsplashAccessKey } = useRuntimeConfig();
  return useAsyncData<T>(
    config.url,
    async () => {
      const response = await axios.get(`/api${config.url}`, {
        params: config.params,
        headers: {
          Authorization: `Client-ID ${unsplashAccessKey}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    options
  );
}
