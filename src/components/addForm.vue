<template id="addForm">
  <div class="formDiv">
    <h2>Sign up!</h2>
      <form>
        <label for="nameInput" >Name</label>
        <textarea v-model="name" id="nameText" placeholder="what is your name?"></textarea>
        <label for="instrumentInput">Instrument</label>
        <textarea v-model="instrument" id="instrumentText" placeholder="what instrument do you play?"></textarea>
        <label for="singInput">Do you sing?</label>
        <textarea v-model="sing" id="singText" placeholder="Yes or No"></textarea>
        <label for="friendsInput">Do you have friends you'd like to be grouped with?</label>
        <textarea v-model="friends" id="friendsText" placeholder="Who are your friends?"></textarea>
        <button>Submit!</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addForm',
  data () {
    nameInput: '';
    instrument: '';
    sing: '';
    friends: '';
  }

}
</script>

<style>

label {
  font-size: 1.5rem;
}

textarea {
  width: 80%;
}

.formDiv {
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
