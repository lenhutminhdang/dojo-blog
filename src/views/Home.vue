<template>
  <div class="home">
    <h1>Home</h1>
    <p v-if="error">{{ error }}</p>
    <div v-else-if="!posts.length">
      <Spinner />
    </div>
    <div v-else class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts.js";
import Spinner from "../components/Spinner.vue";

export default {
  name: "Home",
  components: { PostList, TagCloud, Spinner },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    return {
      posts,
      error,
    };
  },
};
</script>

<style>
.home,
.tag,
.create {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
