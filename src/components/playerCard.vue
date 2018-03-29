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
            <button @click="toggleGroup1()" type="button" :class="{'btn btn-outline-primary': !toggle.group1Toggle, 'btn1clicked btn': toggle.group1Toggle }">Group 1</button>
            <button @click="toggleGroup2()" type="button" :class="{'btn btn-outline-secondary': !toggle.group2Toggle, 'btn2clicked btn': toggle.group2Toggle }">Group 2</button>
            <button @click="toggleGroup3()" type="button" :class="{'btn btn-outline-success': !toggle.group3Toggle, 'btn3clicked btn': toggle.group3Toggle }">Group 3</button>
          </div>
          <div class="bottomRow">
            <button @click="toggleGroup4()" type="button" :class="{'btn btn-outline-info': !toggle.group4Toggle, 'btn4clicked btn': toggle.group4Toggle }">Group 4</button>
            <button @click="toggleGroup5()" type="button" :class="{'btn btn-outline-warning': !toggle.group5Toggle, 'btn5clicked btn': toggle.group5Toggle }">Group 5</button>
            <button @click="toggleGroup6()" type="button" :class="{'btn btn-outline-danger': !toggle.group6Toggle, 'btn6clicked btn': toggle.group6Toggle }">Group 6</button>
          </div>
        </div>
      </div>
      <div class="updateAndDelete">
        <button @click="updatePlayerGroups()" type="button" class="btn btn-outline-primary">Update</button>
        <button @click="remove(player.id)" type="button" class="btn btn-outline-secondary">Delete</button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'playerCard',
  props: ['player'],
  data () {
    return {
      toggle: {
        group1Toggle: false,
        group2Toggle: false,
        group3Toggle: false,
        group4Toggle: false,
        group5Toggle: false,
        group6Toggle: false
      },
      players: {
        id: '',
        name: '',
        instrument: '',
        sing: '',
        created_at: '',
        session: {
          id: '',
          title: '',
          date: '',
          time: '',
          players_id: '',
          session_id: ''
        }
      }
    }
  },
  mounted () {
    this.player.session.forEach(session => {
      if (session.title === 'Group 1') {
        this.toggle.group1Toggle = true
      }
      if (session.title === 'Group 2') {
        this.toggle.group2Toggle = true
      }
      if (session.title === 'Group 3') {
        this.toggle.group3Toggle = true
      }
      if (session.title === 'Group 4') {
        this.toggle.group4Toggle = true
      }
      if (session.title === 'Group 5') {
        this.toggle.group5Toggle = true
      }
      if (session.title === 'Group 6') {
        this.toggle.group6Toggle = true
      }
    })
  },
  methods: {
    toggleGroup1: function () {
      this.toggle.group1Toggle = !this.toggle.group1Toggle
    },
    toggleGroup2: function () {
      this.toggle.group2Toggle = !this.toggle.group2Toggle
    },
    toggleGroup3: function () {
      this.toggle.group3Toggle = !this.toggle.group3Toggle
    },
    toggleGroup4: function () {
      this.toggle.group4Toggle = !this.toggle.group4Toggle
    },
    toggleGroup5: function () {
      this.toggle.group5Toggle = !this.toggle.group5Toggle
    },
    toggleGroup6: function () {
      this.toggle.group6Toggle = !this.toggle.group6Toggle
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
      var joinedGroup = []
      this.toggle.forEach((group, index) => {
        if (group === true) {

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
