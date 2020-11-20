<template>
  <ul class="blog_nav">
    <Entry
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="list-item"
    />
  </ul>
</template>

<script>
export default {
  async fetch () {
    const { data } = await this.$axios.get('https://jsonplaceholder.typicode.com/posts')
    this.posts = data.slice(0, 10)
  },
  data () {
    return {
      posts: []
    }
  }
}
</script>
