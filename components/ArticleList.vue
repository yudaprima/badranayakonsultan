<template>
  <div>
    <ul class="flex flex-wrap rounded grid lg:grid-cols-3 gap-1 ">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="xs:w-full px-2 py-2 xs:mb-6 md:mb-12 article-card "
      >
        <NuxtLink
          :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <!-- <img
            v-if="article.image"
            :src="article.image"
            alt=""
            class="mb-4 border rounded"
          /> -->
          <div
            class="p-5 text-secondary flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full rounded-lg w-full h-48 bg-white hover:bg-gray-900 hover:text-gray-300 space-y-2"
          >
            <h2 class="lg:text-lg text-orange">
              {{ article.title }}
            </h2>
            <p class="leading-relaxed">{{ article.description }}</p>
            <p class="text-sm ">by {{ article.author.name }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
      <Pagination v-if="total > 10" :total="total" />
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";

export default {
  name: "ArticleList",
  components: {
    Pagination
  },
  props: {
    articles: {
      type: Array,
      default: Array
    },
    total: {
      type: Number,
      default: 0
    }
  }
};
</script>
