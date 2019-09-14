<template>
  <div class="post">
    <div class="post-author">{{ author }}</div>
    <div class="post-text">{{ text }}</div>
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
  height: 16rem;
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
  word-wrap: break-word;
}
.post-author {
  margin-left: 0.5rem;
  font-weight: 700;
  line-height: 1;
}
.post-text {
  margin-left: 0.625rem;
  line-height: 1.25;
}
</style>
