<template>
  <li class="w-full">
    <NuxtLink :to="slug" :title="slug" class="flex items-center gap-2 p-2 border rounded-lg border-slate-300">
      <Icon
        :name="icon"
        size="24"
        class="text-slate-600"
      />

      <h5 class="text-lg text-slate-600">
        {{ label }}
      </h5>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
interface IProps {
    icon: string,
    label: string,
    slug: string
}

defineProps<IProps>()
</script>
