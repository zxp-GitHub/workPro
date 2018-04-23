<template>
  <div>
	  <!--S top -->
	  <mt-header fixed  title="登录">
	      <router-link to="/" slot="left">
	        <mt-button icon="back"></mt-button>
	      </router-link>
	  </mt-header>
	  <!--E top -->
	  <div class="log-pic-div">
	  	<img src="../assets/laibaoyouxuanlogo.png" alt="" class="log-img">
	  </div>
   	   <div class="log-input-div">
	  	<input type="text" placeholder="请输入手机号" class="log-phone-input log-input" />
	  	<input type="password" placeholder="请输入密码" class="log-pass-input log-input"/>
	  </div>
	   <button class="log-button">登录</button>
	   <div class="log-another-div">
	  	<span class="to-register-span">注册新用户</span><span class="to-forget-pass-span">忘记密码</span>
	  </div>
  </div>
</template>

<style lang="less">
  @import 'mint-ui/lib/style.css';
  @import 'less/main.less';
  .log-pic-div{
		width: 100%;
		height: 5rem;
		margin-top: 5rem;
		.log-img{
			height: 100%;
			border-radius: 50%;
		}
  }
  .log-input-div{
  	width: 100%;
  	height: 10rem;
  	margin-top: 3rem;
	.log-input{
		width: 80%;
		height: 2rem;
		margin-top: 1rem;
		font: 1rem/1 "微软雅黑";
		border-bottom: 1px solid #ccc;
		padding-left: 1rem;
	}
  }
.log-button{
	width: 90%;
  	height: 2.5rem;
  	border-radius: 0.2rem;
  	background: red;
  	display: flex;
  	align-items: center;
  	justify-content: center;
  	font: 1rem/1 "微软雅黑";
  	color: #fff;
  	margin: 0 auto;
}
.log-another-div{
	margin-top: 1rem;
	display: flex;
	justify-content: flex-end;
	.to-register-span{
		margin-right: 1rem;
	}
	.to-forget-pass-span{
		margin-right: 1.5rem;
	}
}
</style>

<script>
export default {
  name: 'log',
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>