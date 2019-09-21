export const state = () => ({
  newPost: {
    author: '',
    text: ''
  },
  list: []
})

export const mutations = {
  updateNewPostAuthor(state, value) {
    state.newPost.author = value
  },
  updateNewPostText(state, value) {
    state.newPost.text = value
  },
  add(state, payload) {
    state.list.unshift({
      author: payload.author,
      text: payload.text,
      createdAt: new Date()
    })
    state.newPost.text = ''
  }
}
