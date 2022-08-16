import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: "Hasan Sezai",
  },

  mutations: {
    deleteBook(state, payload) {
      if (state.bookList.filter(book => book.id === payload)[0].is_in_store) {
        if (confirm('Are you sure you want to delete this book?')) {
          state.bookList = state.bookList.filter(book => book.id !== payload);
        }
      } else alert("You can't delete a book that is not in the store!");
    },

    addNewBook(state, payload) {
      state.bookList.push(payload);
    }
  },

  actions: {
    deleteBook({ commit }, id) {
      commit('deleteBook', id);
    },

    addNewBook({ commit }, params) {
      commit('addNewBook', params);
    }
  },

  plugins: [new VuexPersistence().plugin]
})

export default store