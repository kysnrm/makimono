<template>
  <div class="container">
    <new-post class="new-post"></new-post>
    <posted-item
      v-for="(post, index) in posts"
      :key="index"
      :author="post.author"
      :text="post.text"
      :created-at="post.createdAt"
    ></posted-item>
  </div>
</template>

<script>
import NewPost from '@/components/NewPost'
import PostedItem from '@/components/PostedItem'

export default {
  components: {
    PostedItem,
    NewPost
  },
  computed: {
    posts() {
      return this.$store.state.posts.list
    }
  }
}
</script>

<style>
*:focus {
  outline: 0;
  border: 0;
  box-shadow: 0 0 0 0.25rem #a3e6b7;
}
</style>

<style scoped>
.container {
  padding: 1rem;
  color: #333;
}
.new-post {
  margin-left: 4rem;
}
.post {
  margin-left: 1rem;
}
</style>
