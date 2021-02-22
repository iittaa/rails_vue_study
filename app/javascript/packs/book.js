import Vue from 'vue/dist/vue.esm';
import App from '../app.vue'
import Router from '../router/router.js'
import Store from '../store/store.js'
import Bookhome from '../pages/BookHome.vue'
import BookCreate from '../pages/BookCreate.vue'


new Vue({
  el: '#app',
  router: Router,
  store: Store,
  components: {
    App,
    Bookhome,
    BookCreate
  }
});