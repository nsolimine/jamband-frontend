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
      res: []
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
  }
}

</script>

<style scoped>

h2 {
  color: #0586D0;
}

</style>
