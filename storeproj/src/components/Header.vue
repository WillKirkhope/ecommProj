<template lang="html">
  <div class="nav">
    <h1>Logo</h1>
    <div class="categories">
    <router-link to="/Mens">Mens</router-link>
    <router-link to="/Womens">Womens</router-link>
    <router-link to="/Gear">Gear</router-link>
    </div>
    <div class="icons">
    <img id="search" src="../assets/search.png" alt="">
    <img id="cart" src="../assets/cart.svg.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css">

.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: solid black 2px; */
  position: fixed;
  right: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
}

.icons{
  margin-right: 5vw;
}

#search{
  margin-right: 1vw;
}

h1{
  margin-left: 5vw;
}

a{
  font-size: 18px;
  margin-left: 1vw;
  margin-right: 1vw;
  text-decoration: none;
  color: #2c3e50;
}

img{
  width: 2vw;
}

</style>
