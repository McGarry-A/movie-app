<template>
  <div class="">
    <h2>{{ title }}</h2>

    <div class="flex gap-2">
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
