<template>
  <div class="register-containter">
	  <!--S top -->
	  <mt-header fixed  title="手机注册">
	      <router-link to="/" slot="left">
	        <mt-button icon="back"></mt-button>
	      </router-link>
	  </mt-header>
	  <!--E top -->
   	   <div class="register-main">
		  	<input type="text" placeholder="请输入手机号码" class="phone-input input" />
		  	<section class="get-code-section">
		  		<input type="password" placeholder="请输入验证码" class="pass-input half-input-left"/>
		  		<button class="button get-code-button">获取验证码</button>
		  	</section> 
	  </div>
	<p class="register-p">
    默认已同意
	    <!-- <a href="#/registerProtocol" style="text-decoration: auto">
	    	《来宝优选用户注册协议》
	    </a> -->
	    <router-link to="/registerProtocol" style="text-decoration: underline;">
	        《来宝优选用户注册协议》
	    </router-link>
	</p>
	   <button class="next-button" style="margin-top: 3rem">下一步</button>

  </div>
</template>

<style lang="less">
  @import 'mint-ui/lib/style.css';
  @import 'less/main.less';
	.register-containter{
	  	width: 100%;
	  	height: 100%;
	  	background: #eee;
	}
	.register-main{
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
	.next-button{
		width: 83%;
		/*css代码遵从覆盖原则*/
	}
  	/*E 库*/
	.get-code-section{  /*语义化标签,使用更方便*/
		width: 100%;
		height: 5rem;
		margin: 0 auto;
		padding-right:3%; 
	}
	.pass-input{
		width: 50%;
		height: 2.3rem;
		float: left;
	}
	.get-code-button{
		width: 40%;
	  	height: 2.3rem;
	  	margin-top: 1rem;
	  	float: right;
	  	background: red;
	  	color: #fff;
	}
	
	.register-p{
		margin:0;
		font:1rem/1 "微软雅黑";
	}
	.register-underline{
		text-decoration: underline;
	}
</style>

<script>
export default {
  name: 'register',
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>