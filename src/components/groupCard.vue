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
