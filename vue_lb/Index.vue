 <template>
  <div class="Index">
      <!-- <div class="home-recommend-boxlc"> -->
               <!--S loadMore -->
                 <!--  <ul
                  v-infinite-scroll="loadMore"
                  infinite-scroll-disabled="loading"
                  infinite-scroll-distance="10">
                  <li v-for="item in listdata">
                      <div class="good-cell">
                        <img :src="'http://api.x5u.com.cn:12804'+item.Img1" class="good-pic">
                        <p class="good-name">{{item.name}}</p>
                        <p> <span class="good-price">¥{{item.SalePrice}}</span> <i class="iconfont icon-gouwuche3 good-icon-car"></i>  </p>
                      </div>
                  </li>
                </ul> -->
                <div class="home-top-boxlc">
                              <!--S top -->
                              <mt-header fixed  title="罗庄金海汇">
                                  <router-link to="/" slot="left">
                                    <mt-button icon="back">返回</mt-button>
                                  </router-link>
                                  <mt-button icon="" slot="right" class="iconfont icon-fangdajing1" style="font-weight: 700" ></mt-button>
                              </mt-header>
                              <!--E top -->
                          </div>
                <div>
                    <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
                        
                          <div class="home-banner-boxlc">
                                    <!--S banner -->
                                    <mt-swipe :auto="4000" class="banner">
                                      <mt-swipe-item><router-link to="pageA">pageA</router-link></mt-swipe-item>
                                      <mt-swipe-item>2</mt-swipe-item>
                                      <mt-swipe-item>3</mt-swipe-item>
                                    </mt-swipe>
                                    <!--E banner -->
                                   
                          </div>
                         <div class="home-shi-boxlc">
                                     <!--S Tabbar -->
                                    <ul class="font-pic-tab">
                                       <li v-for="item in 10">
                                            <img slot="icon" src="../assets/logo.png">
                                          <p>首页</p>
                                       </li>
                                    </ul>
                                    <!--E Tabbar -->
                          </div>

                          <div class="fresh-boxlc" style="">
                            <img src="../assets/shengxianqu.png" alt="" class="top-left-shadow fresh-boxlc-pic1 ">
                            <img src="../assets/jifenchengli.png" alt="" class="top-left-shadow fresh-boxlc-pic2">
                            <img src="../assets/qianghongbao.png" alt="" class="top-left-shadow fresh-boxlc-pic3">
                            <img src="../assets/xinrenzhuanqu.png" alt="" class="top-left-shadow fresh-boxlc-pic4">
                            <ul class="table-list-ul">
                              <li v-for="item in 3" class="table-list-li" style="font-size:0.05rem;width: 33.33%;height: 4rem;">
                              <div style="width: 50%;float: left;height: 100%">
                                <p class="" style="height: 50%;font-weight: 600;line-height: 2.5rem;">新品上市</p>
                                 <p class="" style="height: 50%;color：#ccc;">领先一步</p>
                              </div>
                                 <img src="../assets/jiaozi.png" class="table-list-pic" style="width:50%;float: right;">
                              </li>
                            </ul>
                          </div>
                     <!--  <div class="home-fish-boxlc">
                         fish
                      </div>
                      <div class="home-sales-promotion-boxlc">
                         促销
                      </div> -->
                     <!--  <div class="home-best-sellers-boxlc">
                            热mai
                      </div> -->
                      <div class="home-sales-promotion-boxlc">
                          <p class="sale-p-nav" >
                            <img src="../assets/icon_cuxiaohuodong.png" alt="" class="sales-p-pic sales-p-pic1">
                            <img src="../assets/icon_cuxiaogengduo.png" alt="" class="sales-p-pic sales-p-pic2">
                          </p>
                          <ul class="home-sale-ul table-list-ul">
                            <li v-for="item in 6" class="home-sale-li table-list-li">
                               <h3 class="home-sale-h3 table-list-h3">冲调特惠</h3>
                               <img src="../assets/logo.png" class="home-sale-pic table-list-pic">
                            </li>
                          </ul>
                      </div>
                       
                      <div class="hot-market-boxlc">
                         <p class="sale-p-nav" >
                              <img src="../assets/icon_remenshichang.png" alt="" class="sales-p-pic sales-p-pic1">
                              <img src="../assets/icon_remengongduo.png" alt="" class="sales-p-pic sales-p-pic2">
                         </p>
                         <ul class="hot-market-sale-ul table-list-ul">
                            <li v-for="item in 8" class="hot-market-sale-li table-list-li">
                               <h3 class="hot-market-sale-h3 table-list-h3">冲调特惠</h3>
                               <img src="../assets/logo.png" class="hot-market-sale-pic table-list-pic">
                            </li>
                          </ul>
                          <ul class="hot-market-sale-ul table-list-ul">
                            <li class="hot-market-sale-li table-list-li" style="width: 50%;height: 5rem">
                               <img src="../assets/cainixihuan.png" class="" style="width: 40%">
                               <img src="../assets/logo.png" class="" style="width: 40%">
                            </li>
                             <li class="hot-market-sale-li table-list-li" style="width: 50%;height: 5rem">
                               <img src="../assets/zhekoubang.png" class="" style="width: 40%">
                               <img src="../assets/logo.png" class="" style="width: 40%">
                            </li>
                             <li class="hot-market-sale-li table-list-li" style="width: 50%;height: 5rem">
                               <img src="../assets/resoubang.png" class="" style="width: 40%">
                               <img src="../assets/logo.png" class="" style="width: 40%">
                            </li>
                             <li class="hot-market-sale-li table-list-li" style="width: 50%;height: 5rem">
                               <img src="../assets/remaibang.png" class="" style="width: 40%">
                               <img src="../assets/logo.png" class="" style="width: 40%">
                            </li>
                          </ul>
                      </div>
                      <!-- <div class="recommend-boxlc">

                      </div> -->
                      <p class="sale-p-nav" >
                              <img src="../assets/icon_weinituijian.png" alt="" class="sales-p-pic sales-p-pic1">
                         </p>
                       <ul>
                         <li v-for="(item,index) in listdata" >{{item.name}}</li>
                         <li v-for="(item,index) in downdata" >{{item.name}}</li>
                       </ul>
                    </v-scroll>
                  </div>
      

                 <!-- <div>
                     <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
                     <ul>
                       <li v-for="item in listdata">
                          <div class="good-cell">
                            <img :src="'http://api.x5u.com.cn:12804'+item.Img1" class="good-pic">
                            <p class="good-name">{{item.name}}</p>
                            <p> <span class="good-price">¥{{item.SalePrice}}</span> <i class="iconfont icon-gouwuche3 good-icon-car"></i>  </p>
                          </div>
                      </li>
                     </ul>
                  </v-scroll>
                </div> -->
                <!--E loadMore -->    
    <!-- </div> -->

  </div>
</template>

<!-- <template>
  <div>
       <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
       <ul>
         <li v-for="(item,index) in listdata" >{{item.name}}</li>
         <li v-for="(item,index) in downdata" >{{item.name}}</li>
       </ul>
    </v-scroll>
  </div>
</template> -->
<style lang="less">
  @import 'mint-ui/lib/style.css';
  @import 'less/main.less';
  .child-view{
    height: 100%  ;
    width: 100%;
    background: white;
  }
  .child-view .yo-scroll{
    top: 0;
  }
  /*S 生鲜*/
  .fresh-boxlc{
      width: 100%
  }
  .fresh-boxlc-pic1{
      width: 50%;
      height: 10rem;
      float: left;
  }
  
  .fresh-boxlc-pic2{
      width: 50%;
      height: 5rem;
  }
  .fresh-boxlc-pic3{
      width: 25%;
      height: 5rem;
      float: left;
  }
  .fresh-boxlc-pic4{
      width: 25%;
      height: 5rem;
      float: left;
  }
  /*E 生鲜*/
  /* S 促销活动 */
  .sale-p-nav{
      width: 100%;
      height: 3rem;
      position: relative;
      box-shadow: 0 0 0 #ccc,
                  0 -0.1px 0.1px #ccc,
                  0 0 0#ccc,
                  0 0 0 #ccc; 
      background: #fff;
      .sales-p-pic{
          height: 100%;
          position: absolute;
      }
      .sales-p-pic1{

          left: 0;
          top: 0;
      }
      .sales-p-pic2{
          right: 0;
          top: 0;
      }
  }
  .home-sales-promotion-boxlc{
    width: 100%;
    height: auto;
  }
   .home-sale-li{
        width: 33.3%;
        height: 10rem;
    }
    .hot-market-sale-li{
        width: 25%;
        height: 8rem;
    }   
 /*S 库*/
 /*S ul九宫格设置，只加li的宽高就可以了*/
  .table-list-ul{
    width: 100%;
    height: auto;
      .table-list-li{
          /*width: 25%;
          height: 8rem; 
          就是写这一块！！！*/
          float:left;
          box-shadow: -0.1px 0 0.1px #ccc, 
                      0 -0.1px 0.1px #ccc; 
          .table-list-pic{
              width: 90%;
              /*margin-top: 1rem;*/
          }
          .table-list-h3{
            margin: 1rem 0 0.2rem;
          }
      }
  }
  .table-list-ul:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: "";
      clear: both;
      height: 0;
  }

  .top-left-shadow{
    box-shadow: -0.1px 0 0.1px #ccc, 
                0 -0.1px 0.1px #ccc; 
  }
  /*E ul九宫格设置，只加li的宽高就可以了*/

   /*E 库 */ 
</style>

<script>
import Scroll from './loadMore';
export default{
 name: 'Index',
 data () {
    return {
      counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
      num : 15,  // 一次显示多少条
      pageStart : 0, // 开始页数
      pageEnd : 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      downdata: []  // 上拉更多的数据存放数组
    }
  },
  mounted : function(){
     this.getList();
  },
  methods: {
    getList(){
       let vm = this;
          vm.$http.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
                   vm.listdata = response.data.slice(0,15);
                 }, (response) => {
                    console.log('error');
                });
    },
    onRefresh(done) {
             this.getList();
       
             done() // call done
      
    },
    onInfinite(done) {
              let vm = this;
              vm.$http.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
                  vm.counter++;
                  vm.pageEnd = vm.num * vm.counter;
                  vm.pageStart = vm.pageEnd - vm.num;
                  let arr = response.data;
                     let i = vm.pageStart;
                     let end = vm.pageEnd;
                     for(; i<end; i++){
                        let obj ={};
                        obj["name"] = arr[i].name;
                        vm.downdata.push(obj);
                         if((i + 1) >= response.data.length){
                          this.$el.querySelector('.load-more').style.display = 'none';
                          return;
                        }
                        }
                  done() // call done
                   }, (response) => {
                    console.log('error');
                });
           }
  },
  components : {
      'v-scroll': Scroll
  }
}
</script>
