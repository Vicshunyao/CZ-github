<template>
  <div class="image-container">
    <img :src="imageUrl" alt="My Image" />
    <div class="text-overlay">
      {{ overlayText }}
    </div>
    <div class="content-text">
  
      仓储云专门帮助中小型企业解决仓库库存不准、作业效率低
      下等问题的仓储作业管理系统。系统涵盖了收货、质检、上架、拣料、成品入出库管理、盘点、移库
      、人员绩效、库位管理以及批次管理、不良货品管理等环节
      
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
        <div class="title1">供应链条码不规范</div>
        <div class="content1">条码不统一，编码规划混乱；客户标签规格繁多</div>
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
        <div class="title1">作业效率低</div>
        <div class="content1">找料难，效率低，退料难，无单退料</div>
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
        <div class="title1">人员管理难</div>
        <div class="content1">新人上手难，绩效管理难，人力成本高</div>
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
        <div class="title1">部门间协同困难</div>
        <div class="content1">ERP录入工作量太大，多仓协同困难，对账难</div>
        <!-- <div class="content1">内容行2</div> -->
      </div>
    </div>


    <div class="red-dot dot-bottom-right"></div>
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
        <!-- <div class="content1">内容行2</div> -->
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
        <!-- <div class="content1">内容行2</div> -->
      </div>
    </div>



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
              <h3>全程作业条码化管理</h3>
              <p>供应商送货、工厂收货、物料上架、备料发料、产成品入库、成品发货、盘点等全流程条码管理</p>
            </div>
          </div>

          <div class="rectangle5">
            <div class="rectangle-image">
              <img :src="imageSrc6" alt="产品图片">
            </div>
            <div class="rectangle-text-old">
              <h3>精细化的库位管理</h3>
              <p>随机库位管理提升仓库容积率；一产品精细记多库位信息及批次信息；可视化库位管理</p>
            </div>
          </div>

          <div class="rectangle5">
            <div class="rectangle-image">
              <img :src="imageSrc7" alt="产品图片">
            </div>
            <div class="rectangle-text-old">
              <h3>供应链标签管理</h3>
              <p>提供供应商/客户条码打印平台，实现供应商来料标签及包装标准规范，提高供应链管理能力</p>
            </div>
          </div>

          <div class="rectangle5">
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
          </div>
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
              <h3 style="color: white;">SaaS系统，强大但便宜</h3>
              <p style="color: white;">初始投入低，按年付费，无需购买服务器，无需专职人员维护。成熟标准的WMS系统，功能齐全，一分钱三分货。</p>
            </div>
          </div>

          <div class="rectangle6">
            <div class="rectangle-image2">
              <img :src="imageSrc11" alt="产品图片">
            </div>
            <div class="rectangle-text">
              <h3 style="color: white;">部署快，上手快，见效快</h3>
              <p style="color: white;">即开即用，实施周期短，最快一周即可上线；操作人员培训半天即可上手，使用半年即可见效</p>
            </div>
          </div>

          <div class="rectangle6">
            <div class="rectangle-image2">
              <img :src="imageSrc12" alt="产品图片">
            </div>
            <div class="rectangle-text">
              <h3 style="color: white;">无缝的数据接口</h3>
              <p style="color: white;">与主流ERP，MES、SRM等系统实现无缝数据对接；与阿里云数字工厂、钉钉实现高度集成。</p>
            </div>
          </div>

          <div class="rectangle6">
            <div class="rectangle-image2">
              <img :src="imageSrc13" alt="产品图片">
            </div>
            <div class="rectangle-text">
              <h3 style="color: white;">精益化标杆的快速复制</h3>
              <p style="color: white;">已有大量的成功实践，形成可操作性的仓库管理作业标准，帮助企业快速落地提升管理水平。</p>
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
          <div class="title3">100%</div>
          <div class="content3">实现库存准确率</div>
        </div>
        <div class="item">
          <div class="title3">60%</div>
          <div class="content3">提升作业效率</div>
        </div>
        <div class="item">
          <div class="title3">20%</div>
          <div class="content3">降低人力成本</div>
        </div>
        <div class="item">
          <div class="title3">71%</div>
          <div class="content3">降低软件采购成本</div>
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
      overlayText: "仓储云", // 替换为你想要显示的文字
      imageUrl1:require('@/assets/image/yysd/zzy/经营管理.png'),
      imageUrl2:require('@/assets/image/yysd/zzy/5G应用.png'),

      imageSrc_inner: require('@/assets/image/yysd/zzy/enterprise-target.png'),
      imageSrc1: require('@/assets/image/yysd/zzy/ccy图1.png'), // 图片的路径
      imageSrc2: require('@/assets/image/yysd/zzy/ccy图2.png'), // 图片的路径
      imageSrc3: require('@/assets/image/yysd/zzy/ccy图3.png'), // 图片的路径
      imageSrc4: require('@/assets/image/yysd/zzy/ccy图4.png'), // 图片的路径
      imageSrc4_add1: require('@/assets/image/yysd/zzy/ccy图5.png'), // 图片的路径
      imageSrc4_add2: require('@/assets/image/yysd/zzy/ccy图6.png'), // 图片的路径



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


    // redirectToWebsite() {
    //   window.location.href = 'https://www.baidu.com';//输入需要跳转的咨询网站
    // },
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


<!-- 悬浮框 -->


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
  margin-right: 0px;
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
  margin-left: -500px;
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




