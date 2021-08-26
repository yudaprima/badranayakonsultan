<template>
  <div class="container">
    <div class="flex flex-row"></div>
    <div class="flex flex-wrap lg:flex-no-wrap justify-between h-full">
      <Navpost />
      <a><AppSearchInput class="mt-4 mb-4 mr-max"/></a>
    </div>
    <ul
      class="m-8 flex flex-wrap rounded grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 py-6"
    >
      <li
        v-for="tag of tags"
        :key="tag.slug"
        class="flex justify-center card blog "
      >
        <div
          class="rounded bg-gray-900 rounded-t-lg overflow-hidden shadow max-w-xs my-3"
        >
          <div class=" h-16 w-48"></div>
          <div class="position-relative ">
            <NuxtLink :to="`/articles/tags/${tag.slug}`" class="">
              <div class="">
                <p class="text-center text-gray-300">{{ tag.name }}</p>
              </div>
            </NuxtLink>
            <div class="overlay rounded-lg h-16 "></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content("tags", params.slug)
      .only(["name", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      tags
    };
  }
};
</script>
<style lang="scss" scoped>
.blog {
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    .overlay {
      opacity: 0.4;
    }
  }
}
</style>
