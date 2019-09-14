<template>
  <div class="post">
    {{ author }}
    {{ text }}
    <kanjinized-date :date="createdAt"></kanjinized-date>
  </div>
</template>

<script>
import KanjinizedDate from './KanjinizedDate'
export default {
  components: {
    KanjinizedDate
  },
  props: {
    author: { type: String, required: true, default: 'UserName' },
    text: { type: String, required: true, default: 'text' },
    createdAt: { type: Date, required: true }
  }
}
</script>

<style scoped>
.post {
  padding: 1rem;
  border: 1px solid #000;
}
</style>
