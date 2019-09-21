export const state = () => ({
  newPostAuthor: '',
  newPostText: '',
  list: []
})

export const mutations = {
  add(state, payload) {
    state.list.unshift({
      author: payload.author,
      text: payload.text,
      createdAt: new Date()
    })
    state.newPostText = ''
  },
  updateNewPostAuthor(state, author) {
    state.newPostAuthor = author
  },
  updateNewPostText(state, text) {
    state.newPostText = text
  }
}
