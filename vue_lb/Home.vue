<template>
  <div>
    <mt-header fixed  title="罗庄金海汇">
                    <router-link to="/" slot="left">
                      <mt-button icon="back">返回</mt-button>
                    </router-link>
                    <mt-button icon="" slot="right" class="iconfont icon-fangdajing1" 

style="font-weight: 700" ></mt-button>
                </mt-header>
                <!-- banner -->
                <mt-swipe :auto="4000" class="banner">
                  <mt-swipe-item><router-link to="pageA">pageA</router-link></mt-swipe-item>
                  <mt-swipe-item>2</mt-swipe-item>
                  <mt-swipe-item>3</mt-swipe-item>
                </mt-swipe>
                <!-- Tabbar -->
                <ul class="font-pic-tab">
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                  <li>
                    <img slot="icon" src="../assets/logo.png">
                    <p>首页</p>
                  </li>
                </ul>
   
</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>