<template>
  <div class="container">
    <div class="flex flex-wrap lg:flex-no-wrap">
      <!-- <SideBar /> -->
    </div>
    <div class="flex justify-between">
      <NavTopics />
      <a><AppSearchInput class="mt-4 mb-4 mr-max"/></a>
    </div>
    <ArticleList
      :articles="paginatedArticles"
      :total="allArticles.length"
      class="m-8"
    />
  </div>
</template>

<script>
import getContent from "@/utils/getContent";
import ArticleList from "@/components/ArticleList";

export default {
  name: "HomePage",
  components: {
    ArticleList
  },
  async asyncData({ $content, app, params, error }) {
    const content = await getContent($content, params, error);
    return {
      allArticles: content.allArticles,
      paginatedArticles: content.paginatedArticles
    };
  }
};
</script>

<style class="postscss"></style>
