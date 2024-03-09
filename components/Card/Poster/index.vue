<template>
  <div class="shrink-0">
    <NuxtImg
      :placeholder="IMG_SIZES.poster.placeholder"
      :src="`TMDB/${IMG_SIZES.poster.param}/${movie.poster_path}`"
      class="w-full w-[342px] flex-shrink-0"
    />
  </div>
</template>

<script setup lang="ts">
import IMG_SIZES from '~/constants/image-sizes'
import type { IMovie } from '~/types/movie'

interface IProps {
    movie: Partial<IMovie>
}

defineProps<IProps>()
defineOptions({
  name: 'CardPoster'
})
</script>
