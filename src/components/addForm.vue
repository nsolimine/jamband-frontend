<template id="addForm">
  <div class="formDiv">
    <h2>Sign up!</h2>
    <div class="formCard">
      <form @submit.prevent="handleSubmit">
        <label>Name:</label>
        <textarea v-model="players.name" id="nameText" placeholder="what is your name?"></textarea>
        <label>Instrument:</label>
        <textarea v-model="players.instrument" id="instrumentText" placeholder="what instrument do you play?"></textarea>
        <label>Do you sing?</label>
        <textarea v-model="players.sing" id="singText" placeholder="Yes or No"></textarea>
        <label>Do you have friends you'd like to be grouped with?</label>
        <textarea v-model="players.friends" id="friendsText" placeholder="Who are your friends?"></textarea>
        <button type="submit" class="submit btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addForm',
  data () {
    return {
      players: {
        name: '',
        instrument: '',
        sing: '',
        friends: ''
      }
    }
  },
  methods: {
    handleSubmit (event) {
      this.createPlayer(this.players)
      this.players = {
        name: '',
        instrument: '',
        sing: '',
        friends: ''
      }
    },
    createPlayer (data) {
      return fetch('https://jambandbackend.herokuapp.com/players', {
        method: 'POST',
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

<style>

h2 {
  color: #0586D0;
}

label {
  font-size: 1.5rem;
}

textarea {
  width: 80%;
}

.formDiv {

}

.formCard {
  border: 5px solid black;
  border-radius: 10px;
  padding: 1rem;
}

.submit {
  margin-top: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
