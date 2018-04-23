<template>
  <div>
    <!-- <div class="header"> -->
     <!--  <div class="left" @click="goback"><</div> -->
      <!-- <div class="title">pageA</div> -->
    <!-- </div> -->
    cart
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>