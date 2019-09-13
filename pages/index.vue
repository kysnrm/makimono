<template>
  <div class="container">
    <form>
      <label for="author">名前</label>
      <input type="text" id="author" name="author" />
      <label for="text">本文</label>
      <input type="text" id="text" name="text" />
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
      items: [
        { author: 'taro', text: 'hoge' },
        { author: 'hanako', text: 'fuga' }
      ]
    }
  }
}
</script>

<style></style>
