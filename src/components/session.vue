<template id="session">
  <ul class="sessionDiv">
    <h2>Groups</h2>
    <li v-for="group in session" :key="session.id">
      <p>{{group.title}}</p>
      <p>{{group.date}}</p>
      <p>{{group.time}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Session',
  data () {
    return {
      session: []
    }
  },
  mounted () {
    const sessionURL = 'https://jambandbackend.herokuapp.com/session'
    fetch(sessionURL)
      .then(response => response.json())
      .then(session => {
        console.log(session)
        this.session = session.session.map(session => {
          return session
        })
      })
  }
}

</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
</style>
