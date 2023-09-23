import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([...new Set(posts.flatMap((post) => post.tags))]);

  return {
    tags,
  };
};

export default useTags;
