<template>
  <div>
    <h1>本一覧</h1>
    <div>
      <div class="col-md-5" v-for="(book, i) in books" :key="i">
        <div  class="list-item" @click="setBookInfo(book.id)">
          {{ book.title }}
          
        </div>
      </div>
    </div>
    <div class="row" v-show="bookInfoBool">
      <div class="col s12 m12">
        <div class="card blue-grey darken-1">
          <span>
            {{ bookInfo.title }}
          </span>
          <div>
            {{ bookInfo.author }}
          </div>
          <div>
            {{ bookInfo.publisher }}
          </div>
          <div>
            {{ bookInfo.genre }}
          </div>
          <li><router-link :to="`/edit/${bookInfo.id}`">本の編集</router-link></li>
          <div class="btn btn-primary" @click="deleteBook(bookInfo.id)">削除</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    name: 'BookHome',
    data: function() {
      return {
        // bookInfo: {},
        // bookInfoBool: false,
        // books: [],
      }
    },
    mounted: function() {
      this.$store.commit("fetchBooks")
    },
    computed: {
      ...mapState({
        books: "books",
        bookInfo: "bookInfo",
        bookInfoBool: "bookInfoBool",
      }),

    },
    methods: {
      setBookInfo(id){
        this.$store.commit("setBookInfo", {id})
      },
      deleteBook(id){
        this.$store.commit("deleteBook", {id})
        this.$store.commit("fetchBooks")
      },
      // fetchBooks() {
      //   axios.get('/api/books')
      //   .then((response) => {
      //     console.log("mouted")
      //     console.log(response)
      //     for(let i = 0; i < response.data.length; i++) {
      //       this.books.push(response.data[i]);
      //     }
      //   }, (error) => {
      //     console.log(error);
      //   });
      // },
      // setBookInfo(id){
      //   axios.get(`api/books/${id}`).then(response => {
      //     console.log(response);
      //     this.bookInfo = response.data;
      //     this.bookInfoBool = true;
      //   });
      // },
      // deleteBook(id){
      //   axios.delete(`api/books/${id}`)
      //   .then((response) => {
      //     this.books = [];
      //     this.bookInfo = "";
      //     this.bookInfoBool = false;
      //     this.fetchBooks();
      //   })
      // }
    }
  }
</script>