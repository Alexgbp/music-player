import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const user = JSON.parse(localStorage.getItem('user'));

export const getTracks = createApi({
  reducerPath: 'getTracks',
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: 'catalog/track/all/',
      }),
      providesTags: ['Tracks'],
    }),
    getFavoritesTracks: builder.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).access}`
        },
      }),
      transformResponse: (response) => {
        const tracks = response.map((track) => ({
          ...track,
          stared_user: [{email: user}],
        }));
        return tracks;
      },
      providesTags: ['Tracks'],
    }),
    addFavoriteTrack: builder.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).access}`
        },
      }),
      invalidatesTags: ['Tracks'],
    }),
    deleteFavoriteTrack: builder.mutation({
      query: ({ id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).access}`
        },
      }),
      invalidatesTags: ['Tracks'],
    }),
    getCatalogSection: builder.query({
      query: () => ({
        url: `/catalog/selection/`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).access}`
        },
      }),
      providesTags: ['Tracks'],
    }),
    getCatalogSectionId: builder.query({
      query: ({ id }) => ({
        url: `/catalog/selection/${id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).access}`
        },
      }),
      providesTags: ['Tracks'],
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetFavoritesTracksQuery,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
  useGetCatalogSectionIdQuery,
  useGetCatalogSectionQuery,
} = getTracks
export default getTracks.reducer
