<template>
  <p>
    <nuxt-link
      :to="{ name: 'articles-topics' }"
      class="flex flex-row items-center h-12 px-2 rounded-lg text-gray-500 hover:bg-gray-300"
    >
      <span class="flex items-center justify-center text-lg">
        <notification />
      </span>
      <span class="ml-3">Topics</span>
    </nuxt-link>
  </p>
</template>

<script>
export default {};
</script>

<style></style>
