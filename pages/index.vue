<template>
  <div>
    <GenericRow title="Popular Now">
      <CardPoster v-for="movie in movies" :key="movie.id" :movie="movie" />
    </GenericRow>
  </div>
</template>

<script setup lang="ts">
const { data: movies } = await useFetch('/api/movie')
</script>
