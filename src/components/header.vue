<template id="Header">
  <div class="headerDiv">
    <div class="titleAndLogo">
      <img src="../assets/greenlogo.png" alt="logo" />
      <div class="titles">
        <h1>jamBand</h1>
        <h3>Organizing jam nights for the modern musician</h3>
      </div>
      <img src="../assets/pinklogo.png" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.headerDiv {
  border: 7px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 1rem;
  padding: 1rem 0;
  background-color: #01394b;
  -webkit-box-shadow: -7px 6px 42px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: -7px 6px 42px 1px rgba(0,0,0,0.75);
  box-shadow: -7px 6px 42px 1px rgba(0,0,0,0.75);
}

.titleAndLogo {
  display: flex;
  flex-direction: row;
}

h1 {
  font-size: 3.5rem;
  color: #0586D0;
  padding-top: 1rem;
}

img {
  width: auto;
  height: 150px;
  padding: 0px 3rem 0 3rem;
}
</style>
