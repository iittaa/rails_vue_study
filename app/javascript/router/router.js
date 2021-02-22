import Vue          from 'vue/dist/vue.esm.js'
import VueRouter    from 'vue-router'
import BookHome     from '../pages/BookHome.vue'
import BookCreate   from '../pages/BookCreate.vue'
import BookEdit   from '../pages/BookEdit.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/',
      component: BookHome
    },
    {
      path: '/create',
      component: BookCreate
    },
    {
      path: '/edit/:id',
      component: BookEdit
    },
  ],
})