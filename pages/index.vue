<template>
  <div class="container">
    <form @submit.prevent="addNewPost(newPost.author, newPost.text)">
      <label for="author">名前</label>
      <input
        id="author"
        :value="newPost.author"
        type="text"
        name="author"
        @input="updateNewPostAuthor"
      />
      <label for="text">本文</label>
      <input
        id="text"
        :value="newPost.text"
        type="text"
        name="text"
        @input="updateNewPostText"
      />
      <button type="submit">投稿する</button>
    </form>
    <posted-item
      v-for="(post, index) in posts"
      :key="index"
      :author="post.author"
      :text="post.text"
      :created-at="post.createdAt"
    ></posted-item>
  </div>
</template>

<script>
import PostedItem from '@/components/PostedItem'

export default {
  components: {
    PostedItem
  },
  computed: {
    newPost() {
      return this.$store.state.posts.newPost
    },
    posts() {
      return this.$store.state.posts.list
    }
  },
  methods: {
    updateNewPostAuthor(e) {
      this.$store.commit('posts/updateNewPostAuthor', e.target.value)
    },
    updateNewPostText(e) {
      this.$store.commit('posts/updateNewPostText', e.target.value)
    },
    addNewPost(author, text) {
      if (author !== '' && text !== '') {
        this.$store.commit('posts/add', { author, text })
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding: 1rem;
  color: #333;
}
form {
  margin-left: 4rem;
}
input {
  width: 6rem;
  margin-right: -6rem;
  margin-left: 2rem;
  display: block;
  transform: rotate(90deg);
  transform-origin: top left;
  writing-mode: initial;
}
button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-right: -6rem;
  border-radius: 2rem;
  background-color: #42b983;
  color: #fff;
  border: none;
  transform: rotate(90deg);
  transform-origin: top left;
  font-weight: 700;
  writing-mode: initial;
  transition: 0.2s ease;
}
button:hover {
  background-color: #2a917a;
}
*:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem #a3e6b7;
}
.post {
  margin-left: 1rem;
}
</style>
