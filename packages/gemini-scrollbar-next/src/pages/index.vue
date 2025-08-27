<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = computed(() => {
  return router.getRoutes()
})
</script>

<template>
  <div class="flex flex-col mx-auto w-full max-w-2xl">
    <router-link v-for="route in routes" :key="route.path" class="border" :to="route.path">
      {{ route.name }}
    </router-link>
  </div>
</template>

<style scoped>

</style>
