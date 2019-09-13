<template>
  <div class="container">
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
