<template>
  <div class="image-container">
    <img :src="imageUrl" alt="My Image" />
    <div class="text-overlay">
      {{ overlayText }}
    </div>
    <div class="content-text">
  
      
      提供依客户需求定制的合规监测和事后取证的整体解决方案，促进工厂监管的
      规范化/智能化，生产作业的安全性/高效性，大幅降低人员监管、作业返工和安全事故成本
      
      
    </div>
    <div class="rectangle" @click="goToOtherRoute1">
     <span class="text">相关文档</span>
    </div>
  </div>


  <div class="sticky-menu">
    <el-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect" style="justify-content: center;">
      <el-menu-item index="pain-points">企业痛点</el-menu-item>
      <el-menu-item index="product-features">产品功能</el-menu-item>
      <el-menu-item index="core-advantages">核心优势</el-menu-item>
      <el-menu-item index="product-efficiency">产品效能</el-menu-item>
    </el-menu>
  </div>
    <!-- 其他内容 -->
    <div style="padding-bottom: 60px;">

      <h2 id="pain-points">企业痛点</h2>
      <!-- 其他内容 -->

      <div class="container">
    <div class="outer-circle"></div>

    <!-- 添加红点和线段 -->
    <div class="red-dot dot-top-left"></div>
    <div class="line line-top-left"></div>
    <div class="container1">

      <div class="shadow-circle shadow-circle-top-left">
        <div class="image-wrapper">
          <img :src="imageSrc1" alt="Image" class="inner-image" />
        </div>
      </div>

      <div class="rectangle1">
        <div class="title1">事前无预警</div>
        <div class="content1">缺乏智能化、灵活度需要依靠人力查看，响应不及时</div>
        <!-- <div class="content1">内容行2</div> -->
      </div>
    </div>



    <div class="red-dot dot-top-right"></div>
    <div class="line line-top-right"></div>
    <div class="container1">
    <div class="shadow-circle shadow-circle-top-right">
      <div class="image-wrapper">
        <img :src="imageSrc2" alt="Image" class="inner-image" />
      </div>
    </div>

    <div class="rectangle2">
        <div class="title1">人工识别难</div>
        <div class="content1">监控数据采集维度单一，且效果欠佳，不可用在其他领域</div>
        <!-- <div class="content1">内容行2</div> -->
      </div>
  </div>

    

    <div class="red-dot dot-bottom-left"></div>
    <div class="line line-bottom-left"></div>
    <div class="">
    <div class="shadow-circle shadow-circle-bottom-left">
      <div class="image-wrapper">
        <img :src="imageSrc3" alt="Image" class="inner-image" />
      </div>
    </div>

    <div class="rectangle3">
        <div class="title1">事后取证难</div>
        <div class="content1">通常事后取证，通过是 害怕回放发现异常情况，需要手动调 查取证</div>
        <!-- <div class="content1">内容行2</div> -->
      </div>
    </div>



    
    <div class="red-dot dot-bottom-right"></div>
    <div class="line line-bottom-right"></div>
    <div class="">
    <div class="shadow-circle shadow-circle-bottom-right">
      <div class="image-wrapper">
        <img :src="imageSrc4" alt="Image" class="inner-image" />
      </div>
    </div>
    <div class="rectangle4">
        <div class="title1">数据处理难</div>
        <div class="content1">传统的视频监控数据海量堆叠存储，耗费大量存储空间保存无意义数据，难以从中清洗核心信息，难以为决策应用赋能</div>
        <!-- <div class="content1">内容行2</div> -->
      </div>
    </div>


    <!-- <div class="red-dot dot-bottom-right"></div>
    <div class="line line-left"></div>
    <div class="">
    <div class="shadow-circle shadow-circle-left">
      <div class="image-wrapper">
        <img :src="imageSrc4_add1" alt="Image" class="inner-image" />
      </div>
    </div>
    <div class="rectangle_newadd1">
        <div class="title1">库存准确率低</div>
        <div class="content1">出入库容易出错，准确性不高，线边仓管理黑洞</div>

      </div>
    </div>


    <div class="red-dot dot-bottom-right"></div>
    <div class="line line-right"></div>
    <div class="">
    <div class="shadow-circle shadow-circle-right">
      <div class="image-wrapper">
        <img :src="imageSrc4_add2" alt="Image" class="inner-image" />
      </div>
    </div>
    <div class="rectangle_newadd2">
        <div class="title1">批次管理难</div>
        <div class="content1">先进先出难执行，呆滞品多，造成过期浪费</div>

      </div>
    </div> -->



    <!-- 内圆 -->
    <div class="inner-circle">
      <div class="image-wrapper">
        <img :src="imageSrc_inner" alt="Image" class="inner-image-inner" />
      </div>
    </div>
  </div>

  


    </div>
    







    <div class="backgroundc">
      <h2 id="product-features">产品功能</h2>
      <!-- 其他内容 -->
      <div class="container2">
        <div class="grid">

          <div class="rectangle5">
            <div class="rectangle-image">
              <img :src="imageSrc5" alt="产品图片">
            </div>
            <div class="rectangle-text-old">
              <h3>视频兼容</h3>
              <p>兼容已有的视频监控系统，可利用原有视频进行视频分析</p>
            </div>
          </div>

          <div class="rectangle5">
            <div class="rectangle-image">
              <img :src="imageSrc6" alt="产品图片">
            </div>
            <div class="rectangle-text-old">
              <h3>自动存储</h3>
              <p>监控视频进行实时分析，支持自动报警、自定义分析区域、异常事件视频自动存储等</p>
            </div>
          </div>

          <div class="rectangle5">
            <div class="rectangle-image">
              <img :src="imageSrc7" alt="产品图片">
            </div>
            <div class="rectangle-text-old">
              <h3>事前告警</h3>
              <p>通过智能识别分析，及时识别异常情况</p>
            </div>
          </div>

          <!-- <div class="rectangle5">
            <div class="rectangle-image">
              <img :src="imageSrc8" alt="产品图片">
            </div>
            <div class="rectangle-text-old">
              <h3>智能化先进先出管理</h3>
              <p>系统记录物料或产品的批次信息及存放库位，拣料时自动按照先进先出或指定批次推荐库位</p>
            </div>
          </div>

          <div class="rectangle5">
            <div class="rectangle-image">
              <img :src="imageSrc9" alt="产品图片">
            </div>
            <div class="rectangle-text-old">
              <h3>精细化作业绩效管理</h3>
              <p>全程作业跟踪，提供作业绩效看板。看板展示拣货任务状态、作业差错及作业绩效等</p>
            </div>
          </div>
          <div class="rectangle5">
            <div class="rectangle-image">
              <img :src="imageSrc9_add" alt="产品图片">
            </div>
            <div class="rectangle-text-old">
              <h3>精益化现场管理</h3>
              <p>建立标准作业流程，优化现场库区库位布局，提升企业整体形象</p>
            </div>
          </div> -->
        </div>
      </div>


    </div>

    <div class="backgroundc2">
      <h2 id="core-advantages" style="color:white;margin-top: 0px;padding-top: 60px;">核心优势</h2>
      <!-- 其他内容 -->

      <div class="container4">
        <div class="grid4">

          <div class="rectangle6">
            <div class="rectangle-image2">
              <img :src="imageSrc10" alt="产品图片">
            </div>
            <div class="rectangle-text">
              <h3 style="color: white;">AI实时分析</h3>
              <p style="color: white;">AI实时分析，自定义分析；高精度识别算法，数百种细分场景</p>
            </div>
          </div>

          <div class="rectangle6">
            <div class="rectangle-image2">
              <img :src="imageSrc11" alt="产品图片">
            </div>
            <div class="rectangle-text">
              <h3 style="color: white;">告警联动</h3>
              <p style="color: white;">支持自动报警，通过声电设备、短信、小程序通知</p>
            </div>
          </div>

          <div class="rectangle6">
            <div class="rectangle-image2">
              <img :src="imageSrc12" alt="产品图片">
            </div>
            <div class="rectangle-text">
              <h3 style="color: white;">动作定制</h3>
              <p style="color: white;">支持个性化动作定制，如特殊工服、工位动作识别</p>
            </div>
          </div>

          <div class="rectangle6">
            <div class="rectangle-image2">
              <img :src="imageSrc13" alt="产品图片">
            </div>
            <div class="rectangle-text">
              <h3 style="color: white;">算法叠加</h3>
              <p style="color: white;">支持功能叠加，可根据实际需求开通相应算法，灵活便捷</p>
            </div>
          </div>



        </div>
      </div>

    </div>

    <div>
      <h2 id="product-efficiency">产品效能</h2>
      <!-- 其他内容 -->
      <div class="container3">
        <div class="item">
          <div class="title3">90%</div>
          <div class="content3">监控人力成本降低</div>
        </div>
        <div class="item">
          <div class="title3">95%</div>
          <div class="content3">违规行为检出率</div>
        </div>
        <div class="item">
          <div class="title3">60%</div>
          <div class="content3">数据存储压力降低</div>
        </div>
        <div class="item">
          <div class="title3">50%</div>
          <div class="content3">管理效率提升</div>
        </div>
      </div>

    </div>
  


    <div>
      <div class="area" >
        <el-tooltip content="tooltipContent" placement="left" width="190" trigger="hover" 
    height="220" popper-class="white-tooltip" effect="light">
            <template #content style="background-color:#ffffff;">
          <el-button @mouseenter="showPhoneNumber" @mouseleave="hidePhoneNumber" type="primary">咨询电话</el-button>
          <el-button @mouseenter="showWebsite" @mouseleave="hideWebsite" @click="redirectToWebsite" type="primary">咨询网站</el-button>
          <div v-if="showPhone" class="tooltip-text">{{ phoneNumber }}</div>
          <div v-if="showWebsiteUrl" class="tooltip-text">{{ websiteUrl }}</div>
        </template>
            <div style="display:flex;flex-direction:column;justify-content:center;align-items:center">
        <img src="@/assets/product-center/area-img.png"/>
        <div style="width: 20px;">
        <span style="font-size: 15px;">咨询申请</span>
    </div>
</div>
</el-tooltip>
    </div>
  </div>






</template>


<script >

// import Header from "@/component/Header";
// import IframeVue from "./Iframe.vue";
// import RectangleComponent from '../../components/yysd/image_content.vue';

import { ArrowRight, Edit, ElInput, Search, Service } from "@element-plus/icons-vue";
// import Footer from "@/component/Footer";
export default {
  // name: 'App',
  // components: {
  //   RectangleComponent,
  // },
  components: {
    Service
  },
  data() {
    return {

      imageUrl :  require('@/assets/image/yysd/zzy/仓储云背景图.png'),
      overlayText: "5G+AI合规检测", // 替换为你想要显示的文字
      imageUrl1:require('@/assets/image/yysd/zzy/经营管理.png'),
      imageUrl2:require('@/assets/image/yysd/zzy/5G应用.png'),

      imageSrc_inner: require('@/assets/image/yysd/zzy/enterprise-target.png'),
      imageSrc1: require('@/assets/image/yysd/zzy/5g1-1.png'), // 图片的路径
      imageSrc2: require('@/assets/image/yysd/zzy/5g1-2.png'), // 图片的路径
      imageSrc3: require('@/assets/image/yysd/zzy/ccy图2.png'), // 图片的路径
      imageSrc4: require('@/assets/image/yysd/zzy/ccy图6.png'), // 图片的路径
      // imageSrc4_add1: require('@/assets/image/yysd/zzy/ccy图5.png'), 
      // imageSrc4_add2: require('@/assets/image/yysd/zzy/ccy图6.png'), 



      imageSrc5: require('@/assets/image/yysd/zzy/4-1.png'), // 图片的路径
      imageSrc6: require('@/assets/image/yysd/zzy/4-2.png'), // 图片的路径
      imageSrc7: require('@/assets/image/yysd/zzy/4-3.png'), // 图片的路径
      imageSrc8: require('@/assets/image/yysd/zzy/4-4.png'), // 图片的路径
      imageSrc9: require('@/assets/image/yysd/zzy/4-5.png'), // 图片的路径
      imageSrc9_add: require('@/assets/image/yysd/zzy/4-6.png'), // 图片的路径

      imageSrc10: require('@/assets/image/yysd/zzy/5-1.png'), // 图片的路径
      imageSrc11: require('@/assets/image/yysd/zzy/5-2.png'), // 图片的路径
      imageSrc12: require('@/assets/image/yysd/zzy/5-3.png'), // 图片的路径
      imageSrc13: require('@/assets/image/yysd/zzy/5-4.png'), // 图片的路径




      activeMenu: 'pain-points', // 默认选中的菜单项

      tooltipContent: '点击跳转到网站',
      showPhone: false,
      showWebsiteUrl: false,
      phoneNumber: '123-456-7890',
      websiteUrl: 'https://your-website.com'
    };
  },


  methods: {
    goToOtherRoute() {
      // 在点击卡片时触发的方法
      this.$router.push('/yysd/jygl/ccy'); // 替换为你想要跳转的路由路径
    },
    goToOtherRoute1() {
      // 在点击长方形时触发的方法
      this.$router.push('/other-route'); // 替换为您要跳转的路由路径
    },
    handleMenuSelect(index) {
      // 处理菜单项选择事件
      this.activeMenu = index;
      const section = document.getElementById(index);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    redirectToWebsite() {
      window.location.href = this.websiteUrl;
    },
    showPhoneNumber() {
      this.showPhone = true;
    },
    hidePhoneNumber() {
      this.showPhone = false;
    },
    showWebsite() {
      this.showWebsiteUrl = true;
    },
    hideWebsite() {
      this.showWebsiteUrl = false;
    }
  },

};

</script>



<!-- 悬浮按钮 -->
<style scoped>

.area {
    position: fixed;
    height: 120px;
    right: 30px;
    top: 75%;
    z-index: 6666;
    padding: 20px;
    width: fit-content;
    opacity: 1;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 15px 0 rgba(9, 41, 77, .15);
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.vertical-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  justify-content: center;
}

.vertical-text i {
  margin-bottom: 10px;
  font-size: 18px;
}
.floating-button {
  position: fixed;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
}

</style>

<!-- 最后一个只有文字的组件 -->
<style scoped>
.container3 {
  display: flex;
  justify-content: center;
  margin-top: -80px;
  margin-bottom: 60px;
}

.item {
  margin: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

}

.title3 {
  font-size: 56px;
  font-family: BebasNeue-Regular, BebasNeue;
    font-weight: 400;
    color: #2f3135;
    line-height: 56px;
}

.content3 {
  font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #73787f;
    line-height: 16px;
    margin-top: 10px;
    
}

</style>



<!-- 第3个组件，有4个长方形那个 -->
<style scoped>
.backgroundc2{
  background-color: #00000000; /* 灰色背景色 */
  background-image: url("../../assets/image/yysd/zzy/5-bg.png"); /* 替换为您自己的图像路径 */
  background-repeat: no-repeat;
  background-size: cover;

}
  .container4 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:-120px ;
    padding-bottom: 20px;
    margin-left: -150px;
  }

  .grid4 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px 200px;
  }

  .rectangle6 {
    display: flex;
    align-items: center;
    width: 380px;
    height: 80px;
    background-color: #7d7d7d;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background-color: transparent;
  }


  .rectangle-image2 {
  position: relative;
  width: 80px; /* 调整为适当的圆的大小 */
  height: 80px; /* 调整为适当的圆的大小 */
  border-radius: 50%;
  /* background-color: rgb(147, 147, 147); */
    background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.rectangle-image2 img {
  max-width: 100%;
  max-height: 100%;
}

  .rectangle-text {
    flex: 1;
    max-width: 80%;

  }

  .rectangle-text h3 {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .rectangle-text p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #73787f;
  width: 450px; /* 将此值调整为所需的固定宽度 */
  line-height: 25px;
  }
</style>



<!-- 第二个组件的(有6个长方形那个) -->
<style scoped>
.backgroundc{
  background-color: #f0f2f5; /* 灰色背景色 */

}
  .container2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:-160px ;
    padding-bottom: 60px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  .rectangle5 {
    display: flex;
    align-items: center;
    width: 380px;
    height: 110px;
    background-color: #f0f2f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .rectangle-image {
    flex: 1;
    max-width: 20%;
    padding-right: 0px;
  }

  .rectangle-image img {
    max-width: 100%;
    height: auto;
  }

  .rectangle-text-old {
    flex: 1;
    max-width: 80%;
  }

  .rectangle-text-old h3 {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .rectangle-text-old p {
    margin: 0;
    font-size: 14px;
  }
</style>


<!-- 内容的style -->
<style scoped>
.container1 {
  position: relative;
  display: flex;
  align-items: center;
}

.rectangle1 {
  position: absolute;
  background-color: #ffffff00;
  width: 300px;
  padding: 10px;
  transform: translate(-400px, -10px) /* Adjust the values (-600px, -10px) as needed */

}

.rectangle2 {
  position: absolute;
  background-color: #ffffff00;
  width: 300px;
  padding: 10px;
  transform: translate(400px, -10px) /* Adjust the values (-600px, -10px) as needed */

}

.rectangle3 {
  position: absolute;
  background-color: #ffffff00;
  width: 300px;
  padding: 10px;
  transform: translate(-400px, 275px) /* Adjust the values (-600px, -10px) as needed */

}

.rectangle4 {
  position: absolute;
  background-color: #ffffff00;
  width: 300px;
  padding: 10px;
  transform: translate(400px, 275px) /* Adjust the values (-600px, -10px) as needed */

}
.rectangle_newadd1{
  position: absolute;
  background-color: #ffffff00;
  width: 300px;
  padding: 10px;
  transform: translate(-450px, 110px) /* Adjust the values (-600px, -10px) as needed */
}
.rectangle_newadd2{
  position: absolute;
  background-color: #ffffff00;
  width: 300px;
  padding: 10px;
  transform: translate(450px, 110px) /* Adjust the values (-600px, -10px) as needed */
}

.title1 {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}

.content1 {
  font-size: 14px;
  font-weight: 400;
    color: #73787f;
}

</style>



<!-- 圆的style -->
<style scoped>
.container {
  width: 300px;
  height: 300px;
  position: relative;
  margin: 0 auto;
  margin-top: -50px;
}

.outer-circle {
  width: 300px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #e7e8e9; /* 设置边框颜色为黑色 */
}

.inner-circle {
  width: 190px;
  height: 190px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* 内圆阴影 */
}
.inner-image-inner{
  width: 80px;
  height: 80px;
  object-fit: contain;
}
.inner-image {
  width: 45px;
  height: 45px;
  object-fit: contain;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

/* .red-dot {
  position: absolute;
  background-color: red;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.dot-top-left {
  top: calc(50% - 100px - 6px);
  left: calc(50% - 100px - 6px);
  
}

.dot-top-right {
  top: calc(50% - 100px - 6px);
  right: calc(50% - 100px - 6px);
}

.dot-bottom-left {
  bottom: calc(50% - 100px - 6px);
  left: calc(50% - 100px - 6px);
}

.dot-bottom-right {
  bottom: calc(50% - 100px - 6px);
  right: calc(50% - 100px - 6px);
} */

.line {
  background-color: #0C5DAA;
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.line-left{
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}
.line-right{
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
}

.line-top-left {
  top: calc(50% - 100px - 6px);
  left: calc(50% - 100px - 6px);
  transform: translate(-50%, -50%);
}

.line-top-right {
  top: calc(50% - 100px - 6px);
  right: calc(50% - 100px - 6px);
  transform: translate(50%, -50%);
}

.line-bottom-left {
  bottom: calc(50% - 100px - 6px);
  left: calc(50% - 100px - 6px);
  transform: translate(-50%, 50%);
}

.line-bottom-right {
  bottom: calc(50% - 100px - 6px);
  right: calc(50% - 100px - 6px);
  transform: translate(50%, 50%);
}

.shadow-circle {
  position: absolute;
  background-color: #ffffff;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* 阴影 */
}

.shadow-circle-top-left {
  top: -50px;
  left: -50px;
}

.shadow-circle-top-right {
  top: -50px;
  right: -50px;
}

.shadow-circle-bottom-left {
  bottom: -50px;
  left: -50px;
}

.shadow-circle-bottom-right {
  bottom: -50px;
  right: -50px;
}

.shadow-circle-left{
  bottom: 110px;
  right: 340px;
}
.shadow-circle-right{
  bottom: 110px;
  right: -120px;
}

</style>

<!-- 目录的style -->
<style scoped>
/* 样式可以根据需要进行调整 */
.el-menu {
  background-color: #ffffff;
  padding: 0px;

}
.sticky-menu {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;

}
</style>


<!-- 页面内容的style -->
<style scoped>

h2{
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 50px 0px 130px 10px;
}
 #product-features{
  padding-top: 60px;
  padding-bottom: 60px;
}


</style>

<!-- 第一部分的style -->

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
  justify-content: center;
  align-content: center;
}
.image-container img {
  height: calc(1920/400*width)px;
  width: 1500px;
}

.text-overlay {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 36px;
  margin-left: -425px;
}

.content-text {
  font-weight: 400;
  line-height: 1.5rem;
  position: absolute;
  font-size: 14px;
  top: 40%;
  left: 50%;
  width: 360px;
  /* height: 100px; */
  overflow: hidden;
  margin-left: -550px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.rectangle {
  position: absolute;
  top: 66%;
  left: 10%;
  width: 128px;
  height: 40px;
  background-color: #0C5DAA;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 50px;
}

.text {
  color: white;
  font-size: 1rem;
  font-family: "PingFangSC","Microsoft YaHei",sans-serif;
}
</style>




