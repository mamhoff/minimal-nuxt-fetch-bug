<template>
  <div class="container">
    <Post :title="post.title" :body="post.body" />
  </div>
</template>

<script>
import axios from 'axios'
import Post from '~/components/Post'

export default {
  components: {
    Post
  },

  // This loads the data before rendering this page
  // if we do not have a payload that gets passed
  // in from the ./lib/routesGenerator during `nuxt generate`
  async asyncData ({ $axios, params, error, payload }) {
    if (payload) {
      return {
        post: payload.post
      }
    } else {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.pathMatch}`)
      return {
        post: data
      }
    }
  },
  data () {
    return {
      post: null
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
