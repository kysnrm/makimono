<template>
  <div class="container">
    <form @submit.prevent="addPost(newPost.author, newPost.text)">
      <label for="author">名前</label>
      <input id="author" v-model="newPost.author" type="text" name="author" />
      <label for="text">本文</label>
      <input id="text" v-model="newPost.text" type="text" name="text" />
      <button type="submit">投稿する</button>
    </form>
    <post
      v-for="(post, index) in posts"
      :key="index"
      :author="post.author"
      :text="post.text"
      :created-at="post.createdAt"
    ></post>
  </div>
</template>

<script>
import post from '@/components/post'
export default {
  components: {
    post
  },
  data: () => {
    return {
      newPost: { author: '', text: '' },
      posts: []
    }
  },
  methods: {
    addPost(author, text) {
      if (author !== '' && text !== '') {
        this.posts.push({ author, text, createdAt: new Date() })
        this.newPost.text = ''
      }
    }
  }
}
</script>

<style>
.container {
  writing-mode: vertical-rl;
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
  margin-right: -100%;
  margin-left: 2rem;
  transform: rotate(90deg);
  transform-origin: top left;
  writing-mode: initial;
}
</style>
