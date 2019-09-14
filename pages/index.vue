<template>
  <div class="container">
    <form @submit.prevent="addItem(newPost.author, newPost.text)">
      <label for="author">名前</label>
      <input id="author" v-model="newPost.author" type="text" name="author" />
      <label for="text">本文</label>
      <input id="text" v-model="newPost.text" type="text" name="text" />
      <input type="submit" value="投稿する" />
    </form>
    <div v-for="(item, index) in items" :key="index">
      {{ item.author }}
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      newPost: { author: '', text: '' },
      items: []
    }
  },
  methods: {
    addItem(author, text) {
      this.items.push({ author, text })
      this.newPost.author = ''
      this.newPost.text = ''
    }
  }
}
</script>

<style></style>
