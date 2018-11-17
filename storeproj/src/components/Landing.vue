<template lang="html">
  <div class="landing">
    <div class="side-nav">
      <a href="#">Shirts</a>
      <a href="#">Hats</a>
      <a href="#">Hoddies</a>
      <a href="#">Pants</a>
      <a href="#">Gear</a>
    </div>
    <div class="main-nav">
      <img id="shirts" src="../assets/Shirts.jpeg" alt="">
      <span>New Arrivals</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>


<style lang="css">

.landing{
  display: flex;
  flex-direction: row;
  margin-left: 5vw;
  margin-right: 5vw;
}

.side-nav{
  border: solid black 2px;
  width: 25%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
}

a{
  margin-bottom: 1vw;
  font-size: 24px;
  text-decoration: none;
  color: #2c3e50;
}

.main-nav{
  border: solid black 2px;
  width: 70%;
  display: flex;
  flex-direction: column;
}

#shirts{
  width: 60vw;
}

</style>
