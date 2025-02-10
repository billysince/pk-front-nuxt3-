<template>
  <NuxtLayout>
    <!-- <ContentDoc></ContentDoc> -->
    <NuxtPage />
  </NuxtLayout>
  <VitePwaManifest />
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/useThemeStore'

const themeStore = useThemeStore()

// const { $pwa } = useNuxtApp()

onBeforeMount(async () => {
  useResizeObserver(document.body, () => {
    const width = window.innerWidth
    const contentWidth = 1200
    themeStore.$patch({
      rate: width < 1200 ? +(width / contentWidth).toFixed(2) : 1
    })
  })

  // 关于这些变量：https://github.com/vite-pwa/nuxt/issues/39
  // setInterval(() => {
  //   console.log('swActivated', $pwa.swActivated)
  //   console.log('offlineReady', $pwa.offlineReady)
  //   console.log('needRefresh', $pwa.needRefresh)
  // }, 5000)
})
</script>
