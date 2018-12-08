<template lang="html">
  <div class="landing">
    <div class="main">
      <span class="new-span" >New Arrivals</span>
    </div>
    <div class="mens">
      <span class="mens-span">Mens</span>
    </div>
    <div class="womens">
      <span class="new-span">Womens</span>
    </div>
    <div class="gear">
      <span class="gear-span">Gear</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>


<style lang="css">

.landing{
  display: flex;
  flex-direction: column;
  padding-top: 6vw;
}

.main{
  background-image: url("../assets/Shirts.jpeg");
  height: 60vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.mens{
  background-image: url("../assets/mensShirts.jpeg");
  height: 60vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.womens{
  background-image: url("../assets/womensShirts.jpeg");
  height: 60vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.gear{
  background-image: url("../assets/gear3.jpg");
  height: 60vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

#shirts{
  width: 100%;
}

.new-span{
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

.mens-span{
  background-color: #111;
  color: #fff;
  padding: 20px;
  font-size: 36px;
  letter-spacing: 10px;
  justify-content: center;
  text-align: center;
  opacity: 1;
  margin-top: 25vw;
  margin-left: 62vw;
  width: 20vw;
}

.gear-span{
  background-color: #111;
  color: #fff;
  padding: 20px;
  font-size: 36px;
  letter-spacing: 10px;
  justify-content: center;
  text-align: center;
  opacity: 1;
  margin-top: 25vw;
  margin-left: 39vw;
  width: 20vw;
}


</style>
