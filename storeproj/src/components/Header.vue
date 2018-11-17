<template lang="html">
  <div class="nav">
    <h1>Logo</h1>
    <div class="icons">
    <img id="search" src="../assets/search.png" alt="">
    <img id="cart" src="../assets/cart.svg.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid black 2px;
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

img{
  width: 2vw;
}

</style>
