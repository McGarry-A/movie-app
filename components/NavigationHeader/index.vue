<template>
  <header class="p-4">
    <div class="flex items-center justify-between gap-4">
      <ul class="flex items-center gap-8">
        <li v-for="link in links" :key="link.slug">
          <NuxtLink :to="link.slug">
            {{ link.name }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-4">
        <Icon name="material-symbols:search" size="24" class="cursor-pointer" />
        <Icon name="material-symbols:account-circle-full" size="24" class="cursor-pointer" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'NavigationHeader'
})

const links = [
  {
    name: 'Home',
    slug: '/'
  },
  {
    name: 'Movies',
    slug: '/movies'
  },
  {
    name: 'Series',
    slug: '/series'
  },
  {
    name: 'My List',
    slug: '/my-list'
  }
]
</script>
