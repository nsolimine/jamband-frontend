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
      res: [],
      player: [],
      players: [],
      single: []
    }
  },
  mounted () {
    const sessionURL = 'https://jambandbackend.herokuapp.com/' + 'session'
    fetch(sessionURL)
      .then(response => response.json())
      .then(res => {
        this.res = res.res.map(res => {
          res.players.map(player => {
            console.log(player)
            return player
          })
          return res
        })
      })
      .then(players => {
        this.players = this.res.map(players => {
          players = players.players
          // console.log(players)
          return players
        })
      })
      .then(single => {
        for (var i = 0; i < this.players.length; i++) {
          this.players[i].map(single => {
            // console.log(single)
            return single
          })
        }
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
