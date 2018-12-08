<template lang="html">
  <div class="gear-home">
    <div class="gear-main">
      <span class="gear-span">Gear</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Gear'
}
</script>

<style lang="css">
.gear{
  display: flex;
  flex-direction: column;
  padding-top: 6vw;
}

.gear-main{
    background-image: url("../assets/gear-main.jpeg");
    background-size: cover;
    height: 60vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: scroll;
}

</style>
