<template>
  <div class="playerslist">
    <ul>
      <li>{{players.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'playerslist',
  data () {
    return {
      players: []
    }
  },
  mounted () {
    const apiURL = 'https://jambandbackend.herokuapp.com/players'
    fetch(apiURL)
      .then(response => response.json())
      .then(players => {
        console.log(players)
        this.players = players
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
