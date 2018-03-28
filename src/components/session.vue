<template id="session">
  <div class="sessionDiv">
    <ul>
      <h2>Groups</h2>
      <groupCard v-for="group in res" :key="group.id" :group = 'group'/>
    </ul>
  </div>
</template>

<script>
import groupCard from './groupCard.vue'
export default {
  name: 'Session',
  components: {
    groupCard
  },
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
