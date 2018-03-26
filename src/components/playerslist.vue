<template>
  <div class="playersDiv">
    <ul id="players-list">
      <h2>Players</h2>
      <li v-for="player in players" :key='player.id'>
        <div class="playerCard">
          <p class="playerName">{{player.name}}</p>
          <p>Instrument: {{player.instrument}}</p>
          <p>Do you sing? {{player.sing}}</p>
          <p>Time checked in: {{player.created_at}}</p>
          <p>Do you have friends you'd like to play with? {{player.friends}}</p>
          <div class="addButtonContainer">
            <p>Add to a group</p>
            <div class="addButtons">
              <div class="topRow">
                <button type="button" class="btn btn-outline-primary">Group 1</button>
                <button type="button" class="btn btn-outline-secondary">Group 2</button>
                <button type="button" class="btn btn-outline-success">Group 3</button>
              </div>
              <div class="bottomRow">
                <button type="button" class="btn btn-outline-info">Group 4</button>
                <button type="button" class="btn btn-outline-warning">Group 5</button>
                <button type="button" class="btn btn-outline-danger">Group 6</button>
              </div>
            </div>
          </div>
          <div class="updateAndDelete">
            <button type="button" class="btn btn-outline-primary">Update</button>
            <button @click="remove(player.id)" type="button" class="btn btn-outline-secondary">Delete</button>
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
    const playersAPI = 'https://jambandbackend.herokuapp.com/' + 'players'
    fetch(playersAPI)
      .then(response => response.json())
      .then(players => {
        this.players = players.players.map(players => {
          return players
        })
      })
  },
  methods: {
    remove (id) {
      this.deletePlayer(id)
    },
    deletePlayer (index) {
      return fetch('https://jambandbackend.herokuapp.com/' + 'players/' + index, {
        method: 'DELETE'
      })
    }
  }
}

</script>

<style scoped>

h2 {
  color: #0586D0;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

p {
  font-size: 1.25rem;
}

.playerName {
  font-size: 1.5rem;
}

.addButtons {
  display: flex;
  flex-direction: column;
}

.playerCard {
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
}

</style>
