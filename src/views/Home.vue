<template>
  <div class="home">
    <h2>- - - Search Names - - -</h2>
    <input type="text" v-model="search" placeholder="type to search..." />

    <p v-for="name in matchingNames" :key="name">
      {{ name }}
    </p>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "Home",
  setup() {
    const search = ref("");
    const names = ref(["mario", "yoshi", "luigi", "koopa", "marry", "peach"]);

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return {
      search,
      matchingNames,
    };
  },
};
</script>

<style>
input {
  box-sizing: border-box;
  width: 12rem;
  height: 2rem;
  padding: 1rem;
}

input::placeholder {
  font-style: italic;
}
</style>
