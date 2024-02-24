export const useUiStore = defineStore('ui', () => {
  const navPanelOpen = ref<boolean>(true)

  const toggleNavPanel = (): void => {
    navPanelOpen.value = !navPanelOpen.value
  }

  return { toggleNavPanel, navPanelOpen }
})
