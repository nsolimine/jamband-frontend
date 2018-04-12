<template>
  <li>
    <div class="playerCard">
      <p class="playerName">{{player.name}}</p>
      <p>Instrument: {{player.instrument}}</p>
      <p>Do you sing? {{player.sing}}</p>
      <p>Time checked in: {{player.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
      <p>Do you have friends you'd like to play with? {{player.friends}}</p>
      <div class="addButtonContainer">
        <p>Add to a group!</p>
        <div class="addButtons">
          <div class="topRow">
            <button v-for='group in res' :key='group.id' @click="toggleGroup()" type="button" :class="{'btn btn-outline-primary': !toggle, 'btn1clicked btn': toggle }">{{group.title}}</button>
          </div>
        </div>
      </div>
      <div class="updateAndDelete">
        <button @click="handleUpdate()" type="button" class="btn btn-outline-primary">Update</button>
        <button @click="remove(player.id)" type="button" class="btn btn-outline-secondary">Delete</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'playerCard',
  props: ['player', 'res'],
  data () {
    return {
      toggle: false,
      players: {
        id: '',
        name: '',
        instrument: '',
        sing: '',
        created_at: '',
        friends: '',
        session: [{
          id: '',
          title: '',
          date: '',
          time: '',
          players_id: '',
          session_id: ''
        }]
      }
    }
  },
  mounted () {
    this.player.session.forEach(session => {
      console.log(session, "session")
      this.res.forEach(groupName => {
        console.log(groupName, "groupName")
        if (session.title === groupName.title) {
          this.toggle = true
        }
      })
    })
  },
  methods: {
    toggleGroup: function () {
      this.toggle = !this.toggle
    },
    remove (id) {
      this.deletePlayer(id)
    },
    deletePlayer (index) {
      return fetch('https://jambandbackend.herokuapp.com/' + 'players/' + index, {
        method: 'DELETE'
      })
    },
    handleUpdate (event) {
      var makeGroup = Object.keys(this.toggle)
      console.log(makeGroup)
      makeGroup.forEach((group, index) => {
        var findGroup = this.player.session.find((group) => {
          return group.title === `Group ${index + 1}`
        })
        if (!findGroup && this.toggle[group]) {
          return fetch('https://jambandbackend.herokuapp.com/purgatory', {
            method: 'POST',
            body: JSON.stringify({ players_id: player.id })
          })
        }
      })
      this.updatePlayerGroups(this.players)
      this.players = {
        name: '',
        instrument: '',
        sing: '',
        created_at: '',
        session: ''
      }
    },
    updatePlayerGroups (data) {
      return fetch('https://jambandbackend.herokuapp.com/session', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
    }
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
  background-color: #01394b;
  -webkit-box-shadow: -7px 6px 62px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: -7px 6px 62px 1px rgba(0,0,0,0.75);
  box-shadow: -7px 6px 62px 1px rgba(0,0,0,0.75);
}

</style>
