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
      <kanjinized-date :date="item.createdAt"></kanjinized-date>
    </div>
  </div>
</template>

<script>
import kanjinizedDate from '@/components/date'
export default {
  components: {
    'kanjinized-date': kanjinizedDate
  },
  data: () => {
    return {
      newPost: { author: '', text: '' },
      items: []
    }
  },
  methods: {
    addItem(author, text) {
      if (author !== '' && text !== '') {
        this.items.push({ author, text, createdAt: new Date() })
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
</style>
