<template>
  <header>
    <router-link class="logo" :to="{ name: 'home' }">
      <h1>The Dojo Blog</h1>
    </router-link>
    <nav>
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'create' }">Create Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header h1 {
  color: #dfdfdf;
  font-size: 48px;
}
header .logo {
  text-decoration: none;
}
header nav a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header nav a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>
