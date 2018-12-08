<template lang="html">
  <div class="mens-home">
    <div class="mens-main">
      <span class="mens-span">Mens</span>
    </div>
    //cant see due to sticky header, fix later

  </div>
</template>

<script>
export default {
  name: 'Mens'
}
</script>

<style lang="css">

.mens{
  display: flex;
  flex-direction: column;
  padding-top: 6vw;
}

.mens-main{
  background-image: url("../assets/mens-main.jpeg");
  background-size: cover;
  height: 60vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

</style>
