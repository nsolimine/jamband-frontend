<template id="session">
  <div class="sessionDiv">
    <ul>
      <h2>Groups</h2>
      <li v-for="group in res" :key="group.id">
        <div class="sessionCard">
          <h4>{{group.title}}</h4>
          <p>{{group.date}}</p>
          <p>{{group.time}}</p>
          <h3>Players</h3>
          <div class="playerInfo" v-for="player in group.players" :key="player.id">
            <p class="playerName">{{player.name}}</p>
            <p>Instrument: {{player.instrument}}</p>
            <p>Do you sing? {{player.sing}}<p>
            <p>Time checked in: {{player.created_at}}</p>
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

.playerName {
  font-size: 1.5rem;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
</style>
