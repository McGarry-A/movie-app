<template>
  <div
    class="flex transition-all duration-300 cursor-pointer shrink-0 poster hover:shadow-xl hover:scale-105"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <NuxtImg
      :placeholder="IMG_SIZES.poster.placeholder"
      :src="`TMDB/${IMG_SIZES.poster.param}/${movie.poster_path}`"
      class="w-[342px] z-10"
    />
  </div>
</template>

<script setup lang="ts">
import IMG_SIZES from '~/constants/image-sizes'
import type { IMovie } from '~/types/movie'

interface IProps {
    movie: Partial<IMovie>
}

const isHovering = ref(false)

defineProps<IProps>()
defineOptions({
  name: 'CardPoster'
})
</script>
