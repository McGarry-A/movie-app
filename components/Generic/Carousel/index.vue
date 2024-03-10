<template>
  <GenericRow v-if="movies" :title="title" class="relative">
    <Splide ref="splide" :options="rowOptions">
      <splide-slide v-for="movie in movies" :key="movie.id">
        <CardPoster :movie="movie" />
      </splide-slide>
    </Splide>
  </GenericRow>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import rowOptions from '~/constants/splide'
import type { IMovie } from '~/types/movie'

interface IProps {
    movies: Partial<IMovie>[]
    title: string
  }

defineOptions({
  name: 'GenericCarousel'
})

defineProps<IProps>()

const splide = ref<any>(null)
</script>

<style>
.splide__track {
    overflow: visible !important;
}

.arrow {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0, 0.5);
    width: 100px;
    height: 100%;
    border-radius: 0px;
    color: white;
    fill: white;
    z-index: 9999;
    opacity: 0;
}

.arrow:hover {
    opacity: 1;
}

.arrow:hover svg {
    transform: scale(1.4);
    transition: 0.3s ease-in-out;
}

.arrow--next {
    right: 0px;
    width: 100px;
    margin-left: auto;
}

.arrow--prev {
    left: 0px;
    transform: scale(-1);
}
</style>
