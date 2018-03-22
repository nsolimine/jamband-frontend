<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Session></Session>
  </div>
</template>

<script>
import Header from './components/header'
import Session from './components/session'

export default {
  name: 'App',
  components: {
    Header,
    Session
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
