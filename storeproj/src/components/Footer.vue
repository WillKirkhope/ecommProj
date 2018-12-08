<template lang="html">

<div class="footer">
  <h1>Logo</h1>
  <div class="categories2">
  <a@click="showModalContact">Contact</a>
   <b-modal ref="myModalRefContact" hide-footer title="Contact Us">
     <div class="d-block text-center">
       <h3>You Can Reach Us At Our Office Number:<br>666-666-6666</h3>
       <h3>Or Via Email:<br>contact@666.com</h3>
     </div>
   </b-modal>
  <a@click="showModalAbout">About</a>
  <b-modal ref="myModalRefAbout" hide-footer title="About Us">
    <div class="d-block text-center">
      <h3>Some Garbage About thing placeholder stuff</h3>
    </div>
  </b-modal>
  <a@click="showModalCareers">Careers</a>
  <b-modal ref="myModalRefCareers" hide-footer title="Join Us">
    <div class="d-block text-center">
      <h3>Interested in Joining the Team? Email us:<br>contact@666.com</h3>
    </div>
  </b-modal>
  </div>
  <div class="icons">
  <a href="https://www.facebook.com/"><img id="search" src="../assets/facebook.png"></a>
  <a href="https://www.instagram.com/"><img id="search" src="../assets/instagram.png"></a>
  <a href="https://twitter.com/"><img id="search" src="../assets/twitter.png"></a>
  <a href="https://youtube.com/"><img id="search" src="../assets/youtube.png"></a>
  <!-- <img id="search" src="../assets/facebook.png" alt=""> -->
  <!-- <img id="search" src="../assets/instagram.png" alt="">
  <img id="search" src="../assets/twitter.png" alt="">
  <img id="cart" src="../assets/youtube.png" alt=""> -->
  </div>
</div>

</template>

<script>
export default {
  name: 'Footer',
  methods:{
    showModalContact () {
      this.$refs.myModalRefContact.show()
    },
    showModalAbout () {
      this.$refs.myModalRefAbout.show()
    },
    showModalCareers () {
      this.$refs.myModalRefCareers.show()
    }
  }
}
</script>

<style lang="css">
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}

.categories2{
  display: flex;
  margin-left: 4vw;
}

.categories2 a{
  font-size: 18px;
  margin-left: 1vw;
  margin-right: 1vw;
  text-decoration: none;
  color: #2c3e50;
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
