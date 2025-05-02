<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<template>
  <section class="blog-list">
    <article
      v-for="post in posts"
      :key="post.url"
      class="blog-card"
    >
      <div class="blog-title"><a :href="post.url">{{ post.title }}</a></div>
      <div class="blog-date">{{ post.date.string }}</div>
    </article>
  </section>
</template>

<style scoped>
.blog-list {
  display: grid;
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.blog-card {
  padding: 1.5rem;
}

.blog-card:not(:last-child) {
  border-bottom: 1px solid silver;
}

.blog-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.blog-title a {
  text-decoration: none;
  text-weight: bold;
}

.blog-title a:hover {
  text-decoration: underline;
}

.blog-date {
  font-size: 1rem;
  color: silver;
}

@media (max-width: 600px) {
  .blog-card {
    padding: 1rem;
  }
}
</style>