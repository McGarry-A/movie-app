<template>
  <ul class="flex flex-col gap-2">
    <slot />
  </ul>
</template>

<script setup lang="ts">
defineOptions({
  name: 'GenericList'
})
</script>
