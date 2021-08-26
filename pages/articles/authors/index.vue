<template>
  <div class="container">
    <div class="flex flex-row"></div>
    <div class="flex flex-wrap lg:flex-no-wrap justify-between h-full">
      <Navpost />
      <a><AppSearchInput class="mt-4 mb-4 mr-max"/></a>
    </div>
    <div class="container">
      <ul class="flex flex-wrap rounded grid lg:grid-cols-4 gap-1">
        <li
          v-for="author of authors"
          :key="author.slug"
          class="xs:w-full px-2 py-2 xs:mb-6 md:mb-12 article-card "
        >
          <NuxtLink :to="`/articles/author/${author.name}`" class="">
            <div
              class="p-5 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full rounded-lg w-full h-48 bg-white hover:bg-gray-900 hover:text-gray-400 "
            >
              <div class="text-center text-2xl">
                {{ author.name }}
              </div>
              <p class="text-center ">{{ author.bio }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const authors = await $content("authors", params.slug)
      .only(["name", "slug", "bio"])
      .fetch();
    return {
      authors
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
