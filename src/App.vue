<template>
  <div id="app">
    <p>hello world</p>
    <h1>你好</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return {
      text: 'good'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}
</style>
