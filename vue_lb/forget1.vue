<template>
  <div class="forget1-containter">
	  <!--S top -->
	  <mt-header fixed  title="手机验证">
	      <router-link to="/" slot="left">
	        <mt-button icon="back"></mt-button>
	      </router-link>
	  </mt-header>
	  <!--E top -->
   	   <div class="forget1-main">
		  	<input type="text" placeholder="请输入手机号码" class="forget1-phone-input input" />
		  	<section class="forget1-get-code-section">
		  		<input type="password" placeholder="请输入验证码" class="forget1-pass-input half-input-left"/>
		  		<button class="button forget1-get-code-button">获取验证码</button>
		  	</section> 
	  </div>
	   <button class="next-button forget1-next-button">下一步</button>
  </div>
</template>

<style lang="less">
  @import 'mint-ui/lib/style.css';
  @import 'less/main.less';
	.forget1-containter{
	  	width: 100%;
	  	height: 100%;
	  	background: #eee;
	}
	.forget1-main{
	  	width: 83%;
	  	height: 8rem;
	  	margin: 0 auto;
	  	padding-top: 3rem;

  	}
  	/*S 库*/
  	.input{
		width: 97%;
		height: 2.3rem;
		margin-top: 1rem;
		font: 1rem/1 "微软雅黑";
		border-bottom: 1px solid #ccc;
		padding-left: 3%;
		border-radius: 0.2rem;
	}
	.half-input-left{
		margin-top: 1rem;
		font: 1rem/1 "微软雅黑";
		border-bottom: 1px solid #ccc;
		padding-left: 0.8rem;
		border-radius: 0.2rem;
	}
	.button{
		width: 40%;
	  	height: 2.3rem;
	  	border-radius: 0.2rem;
	  	background: red;
	  	display: flex;
	  	align-items: center;
	  	justify-content: center;
	  	font: 1rem/1 "微软雅黑";
	  	color: #fff;
	}
	.next-button{
		width: 80%;
	  	height: 2.3rem;
	  	border-radius: 0.2rem;
	  	background: red;
	  	display: flex;
	  	align-items: center;
	  	justify-content: center;
	  	font: 1rem/1 "微软雅黑";
	  	color: #fff;
	  	margin: 0 auto;
	}
  	/*E 库*/
	.forget1-get-code-section{  /*语义化标签,使用更方便*/
		width: 100%;
		height: 5rem;
		margin: 0 auto;
		padding-right:3%; 
	}
	.forget1-pass-input{
		width: 50%;
		height: 2.3rem;
		float: left;
	}
	.forget1-get-code-button{
		width: 40%;
	  	height: 2.3rem;
	  	margin-top: 1rem;
	  	float: right;
	  	background: red;
	  	color: #fff;
	}
	.forget1-next-button{
		width: 83%;
		/*css代码遵从覆盖原则*/
	}
</style>

<script>
export default {
  name: 'forget1',
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>