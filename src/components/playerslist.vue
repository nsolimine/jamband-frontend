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
      players: [],
      group1Toggle: false,
      group2Toggle: false,
      group3Toggle: false,
      group4Toggle: false,
      group5Toggle: false,
      group6Toggle: false
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
    },
    getPlayerGroups () {
      return fetch('https://jambandbackend.herokuapp.com/session', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
    },
    updatePlayerGroups () {
      return fetch('https://jambandbackend.herokuapp.com/session', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
    },
    toggleGroup1: function () {
      this.group1Toggle = !this.group1Toggle
    },
    toggleGroup2: function () {
      this.group2Toggle = !this.group2Toggle
    },
    toggleGroup3: function () {
      this.group3Toggle = !this.group3Toggle
    },
    toggleGroup4: function () {
      this.group4Toggle = !this.group4Toggle
    },
    toggleGroup5: function () {
      this.group5Toggle = !this.group5Toggle
    },
    toggleGroup6: function () {
      this.group6Toggle = !this.group6Toggle
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
  color: silver;
}

.addButtons {
  display: flex;
  flex-direction: column;
}

.btn {
  margin: 5px 3px;
}

.btn1clicked {
  background: #BC8B07;
}

.btn2clicked {
  background: #789394;
}

.btn3clicked {
  background: #07A7A0;
}

.btn4clicked {
  background: #0388DA;
}

.btn5clicked {
  background: #E33401;
}

.btn6clicked {
  background: #E50478;
}

.playerCard {
  border: 5px solid black;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
}

</style>
