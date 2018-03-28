<template>
  <li>
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
</template>

<script>
export default {
  name: 'groupCard',
  props: ['group'],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>

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
