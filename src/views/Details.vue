<template>
  <h1>Details</h1>
  <p v-if="error" class="error">{{ error }}</p>
  <div v-else-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete" class="delete">delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost.js";
import Spinner from "../components/Spinner.vue";
import { projectFirestore } from "@/firebase/config.js";
import { useRouter } from "vue-router";

export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const router = useRouter();
    const { post, error, load } = getPost(props.id);
    load();

    const handleDelete = async () => {
      await projectFirestore.collection("posts").doc(props.id).delete();

      router.push({ name: "home" });
    };

    return {
      post,
      error,
      handleDelete,
    };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
.error {
  color: #ae130b;
}

button.delete {
  margin: 10px auto;
}
</style>
