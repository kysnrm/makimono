<template>
  <div>
    {{ author }}
    {{ text }}
    <kanjinized-date :date="createdAt"></kanjinized-date>
  </div>
</template>

<script>
import kanjinizedDate from './date'
export default {
  components: {
    'kanjinized-date': kanjinizedDate
  },
  props: {
    author: { type: String, required: true, default: 'UserName' },
    text: { type: String, required: true, default: 'text' },
    createdAt: { type: Date, required: true }
  }
}
</script>
