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
            <button @click="toggleGroup1()" type="button" :class="{'btn btn-outline-primary': !group1Toggle, 'btn1clicked btn': group1Toggle }">Group 1</button>
            <button @click="toggleGroup2()" type="button" :class="{'btn btn-outline-secondary': !group2Toggle, 'btn2clicked btn': group2Toggle }">Group 2</button>
            <button @click="toggleGroup3()" type="button" :class="{'btn btn-outline-success': !group3Toggle, 'btn3clicked btn': group3Toggle }">Group 3</button>
          </div>
          <div class="bottomRow">
            <button @click="toggleGroup4()" type="button" :class="{'btn btn-outline-info': !group4Toggle, 'btn4clicked btn': group4Toggle }">Group 4</button>
            <button @click="toggleGroup5()" type="button" :class="{'btn btn-outline-warning': !group5Toggle, 'btn5clicked btn': group5Toggle }">Group 5</button>
            <button @click="toggleGroup6()" type="button" :class="{'btn btn-outline-danger': !group6Toggle, 'btn6clicked btn': group6Toggle }">Group 6</button>
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
      group1Toggle: false,
      group2Toggle: false,
      group3Toggle: false,
      group4Toggle: false,
      group5Toggle: false,
      group6Toggle: false
    }
  },
  methods: {
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
    },
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
