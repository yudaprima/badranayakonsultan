<template>
  <div>
    <div v-if="$nuxt.isOffline" class="text-center text-red bg-gray-900">
      You are offline
    </div>
    <TheNavigation />
    <Nuxt />
    <Footer />
  </div>
</template>
