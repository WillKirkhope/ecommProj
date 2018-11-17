<template lang="html">
  <div class="landing">
    <!-- <div class="side-nav">
      <a href="#">Shirts</a>
      <a href="#">Hoddies</a>
      <a href="#">Gear</a>
    </div> -->
    <div class="main">
      <span class="name" >New Arrivals</span>
    </div>
    <div class="mens">
      <span class="mens-span">Mens</span>
    </div>
    <div class="womens">
      <span class="womens-span">Womens</span>
    </div>
    <div class="gear">
      <span class="gear-span">Gear</span>
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
  padding-top: 6vw;
  /* margin-left: 5vw;
  margin-right: 5vw; */
}

/* .side-nav{
  border: solid black 2px;
  width: 25%;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
} */

/* a{
  margin-bottom: 1vw;
  font-size: 24px;
  text-decoration: none;
  color: #2c3e50;
} */

.main{
  background-image: url("../assets/Shirts.jpeg");
  height: 60vw;
  border: solid black 2px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

#shirts{
  width: 100%;
}

.name{
  background-color: #111;
  color: #fff;
  padding: 20px;
  font-size: 36px;
  letter-spacing: 10px;
  justify-content: center;
  text-align: center;
  opacity: 1;
  margin-top: 20vw;
  margin-left: 15vw;
  width: 20vw;

}


</style>
