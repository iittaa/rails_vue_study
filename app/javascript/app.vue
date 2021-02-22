<template>
  <div id="app">
    <ul class="header">
      <li><router-link to="/">本一覧</router-link></li>
      <li><router-link to="/create">本の登録</router-link></li>
    </ul>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
