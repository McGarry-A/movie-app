<template>
  <div class="">
    <h2 class="mb-2 text-3xl font-bold tracking-tighter text-clear">
      {{ title }}
    </h2>

    <div class="relative flex gap-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
    title: string
}

defineOptions({
  name: 'GenericRow'
})

defineProps<IProps>()
</script>
