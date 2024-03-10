<template>
  <div
    class="relative flex transition-all duration-300 cursor-pointer shrink-0 poster hover:shadow-xl hover:scale-105 overlay"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <NuxtImg
      :placeholder="IMG_SIZES.poster.placeholder"
      :src="`TMDB/${IMG_SIZES.poster.param}/${movie.poster_path}`"
      class="w-[342px] z-10"
    />

    <div v-if="isHovering" class="absolute bottom-0 z-50 flex flex-col gap-2 p-4 mt-auto">
      <h3 class="flex items-baseline font-bold text-white">
        {{ movie.original_title }}<span class="ml-2 text-sm text-gray-300">{{ movie?.release_date?.slice(0, 4) }}</span>
      </h3>

      <p class="text-xs text-gray-300 line-clamp-3 text-balance">
        {{ movie.overview }}
      </p>
    </div>
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

<style>
.overlay::after {
    opacity: 0;
    transition: 0.3s ease;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100px;
    z-index: 10;
    background: linear-gradient(to top, transparent 0%, black 100%);
}

.overlay::before {
    opacity: 0;
    transition: 0.3s ease;
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 400px;
    z-index: 11;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
}

.overlay:hover::after,
.overlay:hover::before {
    opacity: 1;
}
</style>
