<template>
  <div id="app">
    <Header></Header>
    <div id="features">
      <div id="app-addFormDiv">
        <addForm></addForm>
      </div>
      <div id="app-playersDiv">
      <router-view/>
    </div>
    <div id="app-sessionDiv">
      <Session></Session>
    </div>
    </div>
  </div>
</template>

<script>
import Header from './components/header'
import Session from './components/session'
import addForm from './components/addForm'

export default {
  name: 'App',
  components: {
    Header,
    Session,
    addForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 2rem;
  color: #01b2a6;
}

#features {
  display: flex;
  flex-direction: row;
}

#app-addFormDiv {
  width: 33.3%;
  padding: 1rem;
}

#app-playersDiv {
  width: 33.3%;
  padding: 1rem;
}

#app-sessionDiv {
  width: 33.3%;
  padding: 1rem;
}
</style>
