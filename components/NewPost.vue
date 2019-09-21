<template>
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
</template>

<script>
export default {
  computed: {
    newPost() {
      return this.$store.state.posts.newPost
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
