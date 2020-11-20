<template>
  <li>
    <nuxt-link :to="url">
      {{ post.title }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    url () {
      return `/${this.post.id}`
    }
  }
}
</script>
