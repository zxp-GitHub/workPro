<template>
  <div class="forget1-containter">
	  <!--S top -->
	  <mt-header fixed  title="手机注册">
	      <router-link to="/" slot="left">
	        <mt-button icon="back"></mt-button>
	      </router-link>
	  </mt-header>
	  <!--E top -->
  </div>
</template>

<style lang="less">
  @import 'mint-ui/lib/style.css';
  @import 'less/main.less';
</style>

<script>
export default {
  name: 'registerProtocol',
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>