const UNSPLASH_API_BASE = "https://api.unsplash.com";

import AxioConfig from "axios";

const axios = AxioConfig.create({
  baseURL: UNSPLASH_API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// the reason for doing this is to prevent the access key from geeting exposed on the client side
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { path } = event;

  const { data } = await axios.get(path.replace(/^\/api/, ""), {
    headers: {
      Authorization: `Client-ID ${config.unsplashAccessKey}`,
    },
    params: event.web?.url?.searchParams,
  });

  return data;
});
