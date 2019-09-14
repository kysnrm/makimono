<template>
  <div>{{ dateKanjinizer(date) }}</div>
</template>

<script>
export default {
  props: { date: Date },
  methods: {
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
        if (onesPlace === 0) {
          return kanjinizedNum[tensPlace] + '十'
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
