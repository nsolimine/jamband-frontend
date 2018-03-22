<template>
  <div class="playersDiv">
    <ul id="players-list">
      <li v-for="player in players" :key="players.id">
        <p>{{player.name}}</p>
        <p>{{player.instrument}}</p>
        <p>Do you sing? {{player.sing}}</p>
        <p>Time checked in {{player.created_at}}</p>
        <p>Do you have friends you'd like to play with? {{player.friends}}</p>
        <div class="addButtonContainer">
          <p>Add to a group</p>
          <div class="addButtons">
            <button>Group 1</button>
            <button>Group 2</button>
            <button>Group 3</button>
            <button>Group 4</button>
            <button>Group 5</button>
            <button>Group 6</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Playerslist',
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
        this.players = players.players.map(players => {
          return players
        })
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
</style>
