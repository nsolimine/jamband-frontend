<template id="session">
  <div class="sessionDiv">
    <ul>
      <h2>Groups</h2>
      <li v-for="group in res" :key="group.id">
        <div class="sessionCard">
          <div class="top">
            <h4 class="groupTitle">{{group.title}}</h4>
            <p>{{group.date | moment("dddd, MMMM Do YYYY")}}</p>
            <p>{{group.time | moment("h:mm")}}</p>
            <button class="btn btn-primary" @click='toggle()'>See who's playing!</button>
          </div>
          <div class="bottom" v-show="isOpen">
            <h3 class="playersTitle">Players</h3>
            <div class="playerInfo" v-for="player in group.players" :key="player.id">
              <p class="playerName">{{player.name}}</p>
              <p>Instrument: {{player.instrument}}</p>
              <p>Do you sing? {{player.sing}}<p>
              <p>Time checked in: {{player.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</p>
            </div>
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
      isOpen: false
    }
  },
  mounted () {
    const sessionURL = 'https://jambandbackend.herokuapp.com/' + 'session'
    fetch(sessionURL)
      .then(response => response.json())
      .then(res => {
        this.res = res.res.map(res => {
          return res
        })
      })
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    }
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
  border: 5px solid black;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.playerName {
  font-size: 1.5rem;
  color: silver;
}

.playersTitle {
  color: #F00183;
}

.groupTitle {
  color: orange;
}

.hidden {
  display: none;
}

.bottom {
  padding: 1rem 0;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}
</style>
