import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore.collection("posts").doc(id).get();

      if (!res.exists) throw new Error("Post not found :(");

      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
    }
  };

  return {
    post,
    error,
    load,
  };
};

export default getPost;
