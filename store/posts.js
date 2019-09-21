export const state = () => ({
  list: []
})

export const mutations = {
  add(state, payload) {
    state.list.push({
      author: payload.author,
      text: payload.text,
      createdAt: new Date()
    })
  }
}
