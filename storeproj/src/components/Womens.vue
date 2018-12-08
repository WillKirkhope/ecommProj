<template lang="html">
  <div class="womens-home">
    <div class="womens-main">
      <span class="new-span">Womens</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Womens'
}
</script>

<style lang="css">
.womens{
  display: flex;
  flex-direction: column;
  padding-top: 6vw;
}

.womens-main{
    background-image: url("../assets/women-main.jpeg");
    background-size: cover;
    height: 60vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
}

</style>
