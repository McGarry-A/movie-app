<template>
  <div class="flex flex-col gap-6 ml-4">
    <GenericCarousel v-if="moviesNowPlaying" title="Now Playing" :movies="moviesNowPlaying" />
    <GenericCarousel v-if="moviesPopular" title="Popular" :movies="moviesPopular" />
  </div>
</template>

<script setup lang="ts">
const { data: moviesNowPlaying } = await useFetch('/api/movie/upcoming')
const { data: moviesPopular } = await useFetch('/api/movie/popular')
</script>
