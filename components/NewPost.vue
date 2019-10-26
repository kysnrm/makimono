<template>
  <form
    @submit.prevent="addNewPost(newPost.author, newPost.text)"
    @keyup.ctrl.enter="addNewPost(newPost.author, newPost.text)"
  >
    <label for="author">名前</label>
    <input
      id="author"
      :value="newPost.author"
      type="text"
      name="author"
      @input="updateNewPostAuthor"
    />
    <label for="text">本文</label>
    <textarea
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
        this.$store.commit('posts/addPost', { author, text })
      }
    }
  }
}
</script>

<style scoped>
input,
textarea {
  padding: 0.5rem;
  border: 1px solid #aaa;
  font-size: 1rem;
  border-radius: 4px;
  transform: rotate(90deg);
  transform-origin: top left;
  writing-mode: initial;
  transition: 0.1s;
}
input:hover,
textarea:hover {
  border: 1px solid #777;
}
input:focus,
textarea:focus {
  outline: 0;
  border: 1px solid #42b983;
}
input {
  width: 16rem;
  margin-right: -15.75rem;
  margin-left: 3rem;
  display: block;
}
textarea {
  width: 16rem;
  margin-right: -15.75rem;
  margin-left: 4rem;
  display: block;
  height: 6rem;
  resize: none;
}
button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-right: -2.5rem;
  border-radius: 2rem;
  background-color: #42b983;
  color: #fff;
  border: none;
  transform: rotate(90deg);
  transform-origin: top left;
  font-weight: 700;
  writing-mode: initial;
  transition: 0.2s ease;
  position: relative;
  bottom: -10.375rem;
}
button:hover {
  background-color: #2a917a;
}
button:focus {
  outline: 0;
  border: 0;
  box-shadow: 0 0 0 0.25rem #a3e6b7;
}
</style>
