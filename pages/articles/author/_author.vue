<template>
  <div class="container">
    <div class="flex flex-row"></div>
    <div class="m-8 flex flex-wrap lg:flex-no-wrap justify-between h-full">
      <Navpost />
      <a><AppSearchInput class="mt-4 mb-4 mr-max"/></a>
    </div>
    <div class="container">
      <h2 class="text-4xl font-bold text-orange mb-3">
        Mr/Ms {{ articles[0].author.name }}
      </h2>
      <p class="mb-5">{{ articles[0].author.bio }}</p>
    </div>

    <div class="container">
      <ul class="flex flex-wrap rounded grid lg:grid-cols-3 gap-1">
        <li
          v-for="article in articles"
          :key="article.slug"
          class="xs:w-full px-2 py-2 xs:mb-6 md:mb-12 article-card "
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
              class="p-5 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full rounded-lg w-full h-48 bg-white hover:bg-gray-900 hover:text-gray-400 space-y-2"
            >
              <h2 class="text-lg text-orange">
                {{ article.title }}
              </h2>
              <p>{{ article.description }}</p>
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
    const articles = await $content("articles", params.slug)
      .where({
        "author.name": {
          $regex: [params.author, "i"]
        }
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles
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
