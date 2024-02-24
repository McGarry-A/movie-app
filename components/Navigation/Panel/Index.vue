<template>
  <aside
    class="w-full h-full min-h-screen overflow-hidden transition-all duration-300 ease-in-out border shadow-lg"
    :class="[navPanelOpen ? 'max-w-sm' : 'max-w-0']"
  >
    <div class="flex flex-col items-center justify-center w-full my-12">
      <h1 class="text-6xl font-bold font-primary text-slate-500">
        JACKED
      </h1>

      <GenericList class="w-full px-6 mt-20">
        <NavigationPanelItem v-for="item in listItems" :key="item.slug" :icon="item.icon" :label="item.label" :slug="item.slug" />
      </GenericList>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { listItems } from '@/config/NavigationPanel'

defineOptions({
  name: 'NavigationPanel'
})

const uiStore = useUiStore()
const { navPanelOpen } = storeToRefs(uiStore)
</script>
