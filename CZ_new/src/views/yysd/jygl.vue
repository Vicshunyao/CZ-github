<template>
  <div class="image-container">
    <img :src="imageUrl" alt="My Image" />
    <div class="text-overlay">
      {{ overlayText }}
    </div>
  </div>


      <!-- 下面是卡片区域 -->
      <!-- 第一张卡片 -->
      <div class="card-container">

<!-- 第一张卡片 -->
    <el-card class="box-card" shadow="hover" :class="['card-with-hover']" @click="goToOtherRoute">
      <template #header>
        <div class="icon-container">
          <div class="img-wrapper">
            <img :src="imageUrl1" alt="My Image"  style="height: 90px;
            width: 90px;"/>
          </div>
        </div>
          <div class="text-container">
            <div class="card-title">仓储云</div>
          </div>
      </template>

    <div class="card-content">
      <span>为企业提供高性价比的全链路仓储智能化服务</span>
      <br><br><br>

    </div>
    <div class="button-container">
      <el-button class="button" text>详情 ></el-button>

  </div>
    </el-card>


<!-- 第二张卡片 -->
<el-card class="box-card" shadow="hover" :class="['card-with-hover']" @click="goToOtherRoute1">
      <template #header>
        <div class="icon-container">
          <div class="img-wrapper">
            <img :src="imageUrl1" alt="My Image"  style="height: 90px;
            width: 90px;"/>
          </div>
        </div>
          <div class="text-container">
            <div class="card-title">供应链云</div>
          </div>
      </template>
      <div class="card-content">
        <span>供应链云是全生命周期的供应链协同云平台，协助企业提高供应链管理效率，产生企业的管理效益。</span>
        <br><br>
      </div>
      <div class="button-container">
        <el-button class="button" text>详情 ></el-button>
      </div>
    </el-card>

  </div>



</template>


<script>

// import Header from "@/component/Header";
// import IframeVue from "./Iframe.vue";


import { ArrowRight, Edit, ElInput, Search } from "@element-plus/icons-vue";
// import Footer from "@/component/Footer";
export default {
  components: { ArrowRight, Edit, ElInput, Search },
  name: "index",
  data() {
    return {
      // fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      fits: ['fill'],


      imageUrl :  require('@/assets/image/yysd/背景.png'),
      overlayText: "经营管理", // 替换为你想要显示的文字
      imageUrl1:require('@/assets/image/yysd/zzy/经营管理.png'),
      imageUrl2:require('@/assets/image/yysd/zzy/5G应用.png'),

    };
  },
  
  methods: {
    goToOtherRoute() {
      // 在点击卡片时触发的方法
      this.$router.push('/yysd/jygl/ccy'); // 替换为你想要跳转的路由路径
    },
    goToOtherRoute1() {
      // 在点击卡片时触发的方法
      this.$router.push('/yysd/jygl/gyly'); // 替换为你想要跳转的路由路径
    }
  },

};
</script>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
  justify-content: center;
  align-content: center;
}
.image-container img{
  height: (1920/400*width)px;
  width: 1500px;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

</style>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 400px;

}


</style>

<style>
.card-container {
  display: flex;
  height: auto;
  padding:30px 40px 30px 40px;
  flex-wrap: wrap;
  justify-content: first-start;
  margin: -10px;

  
}
.icon-container{
  align-items: center;
  padding-top: 10px;
}

.box-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: calc(33.33% -20px); */
  width:400px;
  margin: 30px;
  
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.card-title {
  font-size: 22px;
  font-weight: 400;
  line-height: 36px;
  margin: 15px 0px -10px 0px;
  text-align: center;
  
}

.card-content {
  margin: -5px 20px 40px 20px;

  text-align:center;
  font-size: 14px;
    line-height: 24px;
    color: #73787f;
    
}

.button {
  display: flex;
  justify-content: center;
  width: 130px;
  align-self: flex-end;

}

.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
 
  /* padding-left: 18px; */
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.card-with-hover {
  cursor: pointer;

  /* transition: all 10s ease; */
}
.card-with-hover:hover {
  /* 设置悬停效果的样式 */
  /* border-color: #409EFF; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  border-top: 4px solid #409EFF;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  /* transform: translateY(-5px); */

}

.card-with-hover:hover .button {
  color: white; /* 更改按钮文字颜色为蓝色 */
  border-color: #409EFF; /* 更改按钮边框颜色为蓝色 */
  background-color: #409EFF; /* 更改按钮背景色为透明 */
}



</style>


