<template>
  <div class="tag">
    <h1>Tag</h1>
    <p v-if="error">{{ error }}</p>
    <div v-else-if="!posts.length">
      <Spinner />
    </div>
    <div v-else class="layout">
      <PostList :posts="matchedPosts" />
      <TagCloud :posts="posts" />
    </div>
  </div>
</template>

<script>
// @/ relative to src/ (config in jsconfig.json)
import PostList from "@/components/PostList.vue";
import TagCloud from "@/components/TagCloud.vue";
import Spinner from "@/components/Spinner.vue";
import getPosts from "@/composables/getPosts";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: { PostList, TagCloud, Spinner },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();

    const matchedPosts = computed(() =>
      posts.value.filter((post) => post.tags.includes(route.params.tag))
    );

    return {
      posts,
      error,
      matchedPosts,
    };
  },
};
</script>
