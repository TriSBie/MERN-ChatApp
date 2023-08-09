// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  //create Api slice that lists the url we want to interact with
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main", //name of reducer path
  tagTypes: [],
  endpoints: (builder) => ({
    postAiText: builder.mutation({
      query: (payload) => ({
        url: "openai/text", //url enpoints
        method: "POST",
        body: payload,
      }),
    }), //base on tagTypes -> mutation
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePostAiTextMutation } = api;
