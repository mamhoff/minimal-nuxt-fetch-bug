import axios from 'axios'

export default async function (callback) {
  const routes = []

  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = data.slice(0, 10)

    posts.slice(0, 10).forEach((post) => {
      routes.push({
        route: post.id,
        payload: {
          post
        }
      })
    })

    callback(null, routes)
  } catch (error) {
    callback(error)
  }
}
