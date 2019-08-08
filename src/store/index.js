import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
let cart = localStorage.getItem('cart') || '[]'
cart = JSON.parse(cart)
export default new Vuex.Store({
  state: {
    mycart: cart
  },
  mutations: {
    changeCart (state, arr) {
      const index = state.mycart.findIndex(item => item.id === arr[0])
      if (index > -1) {
        if (arr[1] > 0) {
          state.mycart[index].num = arr[1]
        } else {
          state.mycart.splice(index, 1)
        }
      } else {
        state.mycart.push({id: arr[0], num: arr[1], checked: true})
      }
      localStorage.setItem('cart', JSON.stringify(state.mycart))
    },
    changechecked (state, arr) {
      const index = state.mycart.findIndex(item => item.id === arr[0])
      state.mycart[index].checked = !arr[1]
      localStorage.setItem('cart', JSON.stringify(state.mycart))
    },
    check (state, flag) {
      if (!flag) {
        state.mycart.forEach(item => { item.checked = true })
      } else {
        state.mycart.forEach(item => { item.checked = false })
      }
      localStorage.setItem('cart', JSON.stringify(state.mycart))
    }
  }
})
