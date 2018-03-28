<template>
  <div class="playersDiv">
    <ul id="players-list">
      <h2>Players</h2>
      <playerCard v-for="player in players" :key='player.id' :player = 'player'/>
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
      players: []
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
  }
}

</script>

<style scoped>

h2 {
  color: #0586D0;
}

</style>
