import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
import router from '../router/router.js'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // data的なもの
  state: {
    bookInfo: {},
    bookInfoBool: false,
    books: [],
  },
  // method的なもの
  mutations: {
    fetchBooks(state) {
      state.books = [];
      axios.get('/api/books')
      .then((response) => {
        console.log(response);
        for(var i = 0; i < response.data.length; i++) {
          state.books.push(response.data[i]);
        }
      }, (error) => {
        console.log(error);
      });
    },
    setBookInfo(state, {id}){
      axios.get(`api/books/${id}`)
      .then(response => {
        console.log(response);
        state.bookInfo = response.data;
        state.bookInfoBool = true;
      });
    },
    deleteBook(state, {id}){
      axios.delete(`api/books/${id}`)
      .then(response => {
        console.log(response);
        state.books = [];
        state.bookInfo = "";
        state.bookInfoBool = false;
      });
    },
  }
})