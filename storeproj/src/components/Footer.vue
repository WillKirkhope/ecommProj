<template lang="html">

<div class="footer">
  <h1>Logo</h1>
  <div class="categories">
  <a href="#">Contact</a>
  <a href="#">About</a>
  <a href="#">Careers</a>
  </div>
  <div class="icons">
  <img id="search" src="../assets/facebook.png" alt="">
  <img id="search" src="../assets/instagram.png" alt="">
  <img id="search" src="../assets/twitter.png" alt="">
  <img id="cart" src="../assets/youtube.png" alt="">
  </div>
</div>

</template>

<script>
export default {
}
</script>

<style lang="css">
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
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
