<template>
  <form @submit.prevent="addPost(newPost.author, newPost.text)">
    <label for="author">名前</label>
    <input id="author" v-model="newPost.author" type="text" name="author" />
    <label for="text">本文</label>
    <input id="text" v-model="newPost.text" type="text" name="text" />
    <button type="submit">投稿する</button>
  </form>
</template>

<script>
export default {
  props: {
    author: String,
    text: String
  }
}
</script>
