<template>
  <div>
    <pre>{{ movies }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data: movies } = await useFetch('/api/movie')
</script>
