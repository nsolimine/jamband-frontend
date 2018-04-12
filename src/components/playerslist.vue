<template>
  <div class="playersDiv">
    <ul id="players-list">
      <h2>Players</h2>
      <playerCard v-for="player in players" :key='player.id' :player = 'player' :res = 'res' />
    </ul>
  </div>
</template>

<script>
import playerCard from './playerCard.vue'
export default {
  name: 'Playerslist',
  components: {
    playerCard
  },
  data () {
    return {
      players: [],
      res: []
    }
  },
  mounted () {
    const playersAPI = 'https://jambandbackend.herokuapp.com/' + 'players'
    fetch(playersAPI)
      .then(response => response.json())
      .then(players => {
        this.players = players.players.map(players => {
          return players
        })
      })
    const sessionAPI = 'https://jambandbackend.herokuapp.com/' + 'session'
    fetch(sessionAPI)
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
  color: #E50478;
}

</style>
