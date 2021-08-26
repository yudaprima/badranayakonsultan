<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="flex flex-row"></div>
    <article class="flex justify-left px-3">
      <div
        class="xs:py-8 xs:px-8 lg:py-12 lg:px-6 lg:w-auto xs:w-full h-full overflow-x-scroll markdown-body post-right custom-scroll"
      >
        <div class="flex flex-wrap lg:flex-no-wrap justify-between h-full">
          <Navpost />
          <a><AppSearchInput class="mt-4 mb-4 mr-max"/></a>
        </div>
        <div class="m-8">
          <h2 class="font-bold text-3xl mb-2 text-orange">
            {{ article.title }}
          </h2>
          <p class="mb-1 leading-relaxed">
            {{ article.description }}
          </p>
          <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
          <!-- table of contents -->
          <nav class="pb-6 mt-5">
            <ul>
              <li
                v-for="link of article.toc"
                :key="link.id"
                :class="{
                  'font-light hover:text-secondary': link.depth === 2
                }"
              >
                <nuxtLink
                  :to="`#${link.id}`"
                  class="hover:underline "
                  :class="{
                    'py-2': link.depth === 2,
                    'ml-2 pb-2 mb-5': link.depth === 3
                  }"
                  >{{ link.text }}</nuxtLink
                >
              </li>
            </ul>
          </nav>
          <!-- content from markdown -->
          <nuxt-content
            :document="article"
            class="tracking-wide leading-relaxed font-lg"
          />
          <!-- content author component -->
          <author :author="article.author" />
          <!-- prevNext component -->
          <PrevNext :prev="prev" :next="next" class="mt-8" />
        </div>
      </div>
    </article>
  </div>
</template>
<script>
// import global from "@/utils/global";
// import getSiteMeta from "@/utils/getSiteMeta";
export default {
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description
        }
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://roofel.com/${this.$route.params.slug}`
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    const tagsList = await $content("tags")
      .only(["name", "slug"])
      .where({ name: { $containsAny: article.tags } })
      .fetch();
    const tags = Object.assign({}, ...tagsList.map(s => ({ [s.name]: s })));
    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();
    return {
      article,
      tags,
      prev,
      next
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
<style>
.icon.icon-link {
  background-image: url("~assets/svg/icon-hashtag.svg");
  display: inline-block;
  width: 14px;
  height: 14px;
  background-size: 14px 14px;
}
</style>
