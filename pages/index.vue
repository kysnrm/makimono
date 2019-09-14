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
      {{ dateKanjinizer(item.createdAt) }}
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
      this.items.push({ author, text, createdAt: new Date() })
      this.newPost.author = ''
      this.newPost.text = ''
    },
    dateKanjinizer(createdAt) {
      const kanjinizedNum = [
        '〇',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '七',
        '八',
        '九'
      ]
      const year = createdAt.getFullYear()
      const splittedYear = year.toString().split('')
      const kanjinizedYear = splittedYear
        .map((x) => kanjinizedNum[parseInt(x, 10)])
        .join('')
      function kanjinizedDoubleDigit(num) {
        const tensPlace = Math.floor(num / 10)
        const onesPlace = num % 10
        if (tensPlace === 0) {
          return kanjinizedNum[num]
        }
        if (tensPlace === 1) {
          return '十' + kanjinizedNum[onesPlace]
        }
        return kanjinizedNum[tensPlace] + '十' + kanjinizedNum[onesPlace]
      }
      const month = createdAt.getMonth()
      const kanjinizedMonth = kanjinizedDoubleDigit(month)
      const date = createdAt.getDate()
      const kanjinizedDate = kanjinizedDoubleDigit(date)
      const hour = createdAt.getHours()
      const kanjinizedHour = kanjinizedDoubleDigit(hour)
      const minute = createdAt.getMinutes()
      const kanjinizedMinute = kanjinizedDoubleDigit(minute)
      const kanjinizedFullDate = `${kanjinizedYear}年${kanjinizedMonth}月${kanjinizedDate}日${kanjinizedHour}時${kanjinizedMinute}分`
      return kanjinizedFullDate
    }
  }
}
</script>

<style></style>
