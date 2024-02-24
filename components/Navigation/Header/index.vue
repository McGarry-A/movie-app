<template>
  <header class="w-full h-full">
    <button @click="toggleNavPanel()">
      <Icon name="material-symbols:menu-rounded" color="black" size="32" />
    </button>
  </header>
</template>

<script setup lang="ts">
const { toggleNavPanel } = useUiStore()
</script>
