<template id="session">
  <div class="sessionDiv">
    <ul>
      <h2>Groups</h2>
      <li v-for="group in res" :key="group.id">
        <div class="sessionCard">
          <p>{{group.title}}</p>
          <p>{{group.date}}</p>
          <p>{{group.time}}</p>
          <div v-for="player in group.players" :key="player.id">
            <h3>{{player.name}}</h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Session',
  data () {
    return {
      res: []
    }
  },
  mounted () {
    const sessionURL = 'https://jambandbackend.herokuapp.com/' + 'session'
    fetch(sessionURL)
      .then(response => response.json())
      .then(res => {
        this.res = res.res.map(res => {
          return res
        })
      })
  }
}

</script>

<style scoped>

h2 {
  color: #0586D0;
}

p {
  font-size: 1.25rem;
}

.sessionCard {
  border: 1px solid black;
  padding: 1rem 1rem 0 1rem;
  margin-bottom: 1rem;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
</style>
