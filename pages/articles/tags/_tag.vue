<template>
  <div class="container">
    <div class="flex flex-row"></div>
    <div class="flex flex-wrap lg:flex-no-wrap justify-between h-full">
      <Navpost />
      <a><AppSearchInput class="mt-4 mb-4 mr-max"/></a>
    </div>

    <div class="m-8">
      <h3 class="mb-4 font-bold text-2xl text-secondary">
        Articles tagged {{ tag.name }}:
      </h3>
      <ul class="flex flex-wrap">
        <li
          v-for="article in articles"
          :key="article.slug"
          class="xs:w-full md:w-1/3 px-2 py-2 xs:mb-6 md:mb-12 article-card  "
        >
          <NuxtLink
            :to="{ name: 'articles-slug', params: { slug: article.slug } }"
            class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
          >
            <!-- <img
              v-if="article.img"
              class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
              :src="article.img"
              :alt="article.alt"
            /> -->

            <div
              class="p-6 flex flex-col justify-between bg-white  xxlmin:w-1/2 xxlmax:w-full  h-48"
            >
              <h2 class="font-bold text-secondary">{{ article.title }}</h2>
              <p>{{ article.description }}</p>
              <p class="text-gray-500 text-sm">by {{ article.author.name }}</p>
              <p class="text-gray-500 text-sm">
                {{ formatDate(article.updatedAt) }}
              </p>
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
    const tags = await $content("tags")
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch();
    const tag = tags.length > 0 ? tags[0] : {};
    const articles = await $content("articles", params.slug)
      .where({ tags: { $contains: tag.name } })
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
      tag
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>
