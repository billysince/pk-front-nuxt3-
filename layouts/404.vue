<template>
  <div>
    <h1>404 Page</h1>
    <NuxtPage></NuxtPage>
    <button @click="router.back()">返回</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped></style>
