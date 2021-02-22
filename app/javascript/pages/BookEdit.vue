<template>
  <div class="container">
    <h1 class="#f3e5f5 purple lighten-5 center">本の編集</h1>
    <form class="col s12">
      <div class="row">
        <div class="input-field">
          <input placeholder="Title" type="text" class="validate" v-model="book.title" required="required"><br>
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Author" type="text" class="validate" v-model="book.author" required="required">
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Publisher" type="text" class="validate" v-model="book.publisher" required="required">
        </div>
      </div>
      <div class="row">
        <div class="input-field">
          <input placeholder="Genre" type="text" class="validate" v-model="book.genre" required="required">
        </div>
      </div>
      <div class="btn btn-primary" @click="updateBook(book.id)">本の情報を変更</div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'BookEdit',
    data: function() {
      return {
        id: this.$route.params.id,
        book: {
          id: '',
          title: '',
          author: '',
          publisher: '',
          genre: '',
        },
      }
    },
    mounted: function() {
      this.setbookEdit(this.id);
    },
    methods: {
      setbookEdit(id){
        axios.get(`../api/books/${id}`)
        .then(response => {
          console.log(response);
          this.book.id = response.data.id;
          this.book.title = response.data.title;
          this.book.author = response.data.author;
          this.book.publisher = response.data.publisher;
          this.book.genre = response.data.genre;
        });
      },
      updateBook(id) {
        if (!this.book.title) return;
        axios.put(`/api/books/${id}`,{
          book: this.book
          })
          .then((response) => {
        // 以下は<router-link/>と同様の意味
          this.$router.push('/');
        }, (error) => {
          console.log(error);
        });
      },
    }
  }
</script>

<style scoped></style>