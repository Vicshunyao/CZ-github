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
    <el-card class="box-card" shadow="hover" :class="['card-with-hover']" @click="goToOtherRoute1">
      <template #header>
        <div class="icon-container">
          <div class="img-wrapper">
            <img :src="imageUrl2" alt="My Image"  style="height: 90px;
            width: 90px;"/>
          </div>
        </div>
          <div class="text-container">
            <div class="card-title">5G+AI合规检测</div>
          </div>
      </template>
      <div class="card-content">
        <span>提供依客户需求定制的合规监测和事后取证的整体解决方案，促进工厂监管的规范化/智能化，生产作业的安全性/高效性，大幅降低人员监管、作业返工和安全事故成本</span>
      </div>
      <div class="button-container">
        <el-button class="button" text>详情 ></el-button>
      </div>
    </el-card>

<!-- 第二张卡片 -->
    <el-card class="box-card" shadow="hover" :class="['card-with-hover']" @click="goToOtherRoute2">
      <template #header>
        <div class="icon-container">
          <div class="img-wrapper">
            <img :src="imageUrl2" alt="My Image"  style="height: 90px;
            width: 90px;"/>
          </div>
        </div>
          <div class="text-container">
            <div class="card-title">5G+工业视觉</div>
          </div>
      </template>
      <div class="card-content">
        <span>针对自动化生产中，目标定位、质量瑕疵检测、外观尺寸测量、工件计数、识别确认及自动化中对位组装等检测需求，通过AI算法实现复杂场景的准备识别，降低产品质检成本</span>
      </div>
      <div class="button-container">
        <el-button class="button" text>详情 ></el-button>
      </div>
    </el-card>

<!-- 第三张卡片 -->
    <el-card class="box-card" shadow="hover" :class="['card-with-hover']" @click="goToOtherRoute3">
      <template #header>
        <div class="icon-container">
          <div class="img-wrapper">
            <img :src="imageUrl2" alt="My Image"  style="height: 90px;
            width: 90px;"/>
          </div>
        </div>
          <div class="text-container">
            <div class="card-title">5G+工业AR</div>
          </div>
      </template>
      <div class="card-content">
        <span>通过佩戴AR眼镜将实时画面通过5G网络上传至边缘云，专家可以通过实时视频、AR标注等方式远程指导前方工作人员解决问题，提升沟通效率，减少差旅时间</span>
      </div>
      <div class="button-container">
        <el-button class="button" text>详情 ></el-button>
      </div>
    </el-card>
<!-- 第四张卡片 -->
    <el-card class="box-card" shadow="hover" :class="['card-with-hover']" @click="goToOtherRoute4">
      <template #header>
        <div class="icon-container">
          <div class="img-wrapper">
            <img :src="imageUrl2" alt="My Image"  style="height: 90px;
            width: 90px;"/>
          </div>
        </div>
          <div class="text-container">
            <div class="card-title">5G+AGV</div>
          </div>
      </template>
      <div class="card-content">
        <span>面向仓储物流及生产制造行业客户，通过5G网络、边缘计算、定位导航等技术为客户提供无人搬运解决方案，实现柔性生产制造，为企业大幅度降低运营成本</span>
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
      overlayText: "5G应用", // 替换为你想要显示的文字
      imageUrl1:require('@/assets/image/yysd/zzy/经营管理.png'),
      imageUrl2:require('@/assets/image/yysd/zzy/5G应用.png'),

    };
  },
  
  methods: {
    goToOtherRoute1() {
      // 在点击卡片时触发的方法
      this.$router.push('/yysd/fiveapply/fiveapply_one'); // 替换为你想要跳转的路由路径
    },
    goToOtherRoute2() {
      // 在点击卡片时触发的方法
      this.$router.push('/yysd/fiveapply/fiveapply_two'); // 替换为你想要跳转的路由路径
    },    
    goToOtherRoute3() {
      // 在点击卡片时触发的方法
      this.$router.push('/yysd/fiveapply/fiveapply_three'); // 替换为你想要跳转的路由路径
    },    
    goToOtherRoute4() {
      // 在点击卡片时触发的方法
      this.$router.push('/yysd/fiveapply/fiveapply_four'); // 替换为你想要跳转的路由路径
    },
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


