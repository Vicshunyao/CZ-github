<script scoped>
export default {
 
 data() {
   return {
    activeMenu: 'pain-points',// 默认选中的菜单项
            tooltipContent: '点击跳转到网站',
            showPhone: false,
            showWebsiteUrl: false,
            phoneNumber: '123-456-7890',
            websiteUrl: 'https://your-website.com',
   };
 },


 methods: {
   // goToOtherRoute() {
   //   // 在点击卡片时触发的方法
   //   this.$router.push('/yysd/jygl/ccy'); // 替换为你想要跳转的路由路径
   // },
   // goToOtherRoute1() {
   //   // 在点击长方形时触发的方法
   //   this.$router.push('/other-route'); // 替换为您要跳转的路由路径
   // },
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

<template>
    
<el-header class="header1">
    <div style="margin-left: 100px;">
        <div>
       <span class="title">小工单</span> 
    </div>
       <div style="width: 400px;margin-top: 10px;">
        <p>
        小工单是联通智造云针对制造业生产管理场景推出的一款轻量化小程序应用，实现生产过程、不良品和外协加工的数字化管理，工人绩效日结；解决生产进度不透明、外协加工难管控、工资核算效率低不准确等问题
      </p>
      </div>
      <el-button type="primary" style="margin-top: 30px;">相关文档</el-button>
    </div>
    </el-header>
<el-main class="mainbox">
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
    
    <!-- <el-menu 
    class="el-menu-demo"
    mode="horizontal"
    style="justify-content: center;"
    >
        <el-menu-item index="1" style="margin-right: 50px;">企业痛点</el-menu-item>
        <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
        <el-menu-item index="3" style="margin-right: 50px;">核心优势</el-menu-item>
        
    </el-menu> -->

    <el-affix :offset="0">
    <div class="sticky-menu">
    <el-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect" style="justify-content: center;">
      <el-menu-item index="1" style="margin-right: 50px;">工厂管理常见烦恼</el-menu-item>
      <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
      <el-menu-item index="3" style="margin-right: 50px;">竞品分析</el-menu-item>
      <el-menu-item index="4" style="margin-right: 50px;">产品价值</el-menu-item>
      <el-menu-item index="5">核心优势</el-menu-item>
    </el-menu>
  </div>
</el-affix>

   <div class="no0" id="1">
    <span style="margin-top: 65px;margin-bottom: 20px; font-size: 25px;font-weight: 800;">工厂管理常见烦恼</span>
    <div>
        <img style="width: 1200px;" src="@/assets/product-center/img1.png"/>
    </div>
   </div>
   <div class="no2" id="2">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">产品功能</span>
        <div class="box2">
            <div class="box2-2" style="width: 450px;margin-right: 20px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-1.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">车间透明化</h1>
                <p style="font-size: 14px;color: #777;">小程序实现车间现场实时报工，收集工单数据，生产消息实时播报</p>
            </div>
            </div>
            <div class="box2-2" style="width: 450px;margin-right: 20px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-2.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">绩效精准化</h1>
                <p style="font-size: 14px;color: #777;">工人报工，班组长工资审核，每日绩效、工资报表一键导出</p>
            </div>
            </div>
            <div  class="box2-2" style="width: 450px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-3.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">外协管控</h1>
                <p style="font-size: 14px;color: #777;">分配外协工序，任务进度、委外工单报表实施查看</p>
            </div>
            </div>
            
        </div>
    </div>

    <div class="no0" id="3">
    <span style="margin-top: 60px;margin-bottom: 20px; font-size: 25px;font-weight: 800;">竞品分析</span>
    <div>
        <img style="width: 1200px;" src="@/assets/product-center/img2.png"/>
    </div>
   </div>

   <div class="no0" id="4">
    <span style="margin-top: 60px;margin-bottom: 20px; font-size: 25px;font-weight: 800;">产品价值</span>
    <div>
        <img style="width: 1200px;" src="@/assets/product-center/img3.png"/>
    </div>
   </div>

    <div class="no1" id="5">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">核心优势</span>
        <div class="box1">
            <div class="box1-1" style="width: 300px;height: 300px;margin-right: 50px;">
                <img src="@/assets/product-center/7-1.png"/>
                <h1 style="margin-top: 20px;">轻量化</h1>
                <p style="margin-top: 40px;width: 200px;">小程序+web端使用方式，系统功能可自助化配置</p>
            </div>
            <div class="box1-1" style="width: 300px;height: 300px;margin-right: 50px;">
                <img src="@/assets/product-center/7-2.png"/>
                <h1 style="margin-top: 20px;">低成本</h1>
                <p style="margin-top: 40px;width: 200px;">7800元用1年，即买即用，无需实施，系统3小时跑通</p>
            </div>
            <div class="box1-1" style="width: 300px;height: 300px;margin-right: 50px;">
                <img src="@/assets/product-center/7-3.png"/>
                <h1 style="margin-top: 20px;">简单易用</h1>
                <p style="margin-top: 40px;width: 200px;">C端体验，半小时即可学会，操作跟刷抖音一样简单</p>
            </div>
            <div class="box1-1" style="width: 300px;height: 300px;">
                <img src="@/assets/product-center/7-4.png"/>
                <h1 style="margin-top: 20px;">系统灵活</h1>
                <p style="margin-top: 40px;width: 200px;">从工单全链路数字化切入，分阶段引领工厂数字化转型</p>
            </div>
        </div>

    </div>
    

    
   
</el-main>
</template>

<style lang='scss' scoped>
.header1{
    padding-left: 0;
    padding-right: 0%;
    padding-top: 0;
    width: auto;
    height: 400px;
    background-image: url('@/assets/product-center/monitor.png');
    background-size: 100% 400px;
    display: flex;
    // justify-content: center;
    align-items:center;
}
.title {
    display: flex;
    font-size: 40px;
    font-weight: 900;
    color: #000;

}
.mainbox{
    padding-left: 0;
    padding-top: 0;
    padding-right: 0;
}
.area{
    position: fixed;
    height: 120px;
    right: 30px;
    top: 75%;
    z-index: 6666;
    padding: 20px;
    // width: -webkit-fit-content;
    // width: -moz-fit-content;
    width: fit-content;
    opacity: 1;
    border-radius: 8px;
    box-shadow: 0 2px 15px 0 rgba(9,41,77,.15);
    cursor:pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
}
.no0{
    display: flex;
    // justify-content: center;
    flex-direction:column;
    align-items: center;
    
}
.no1{
    display: flex;
    // justify-content: center;
    flex-direction:column;
    align-items: center;
    height: 500px;
}
.box1{
    display: flex;
    flex-direction: row;
    margin-top: 30px;
}
.box1-1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.box1-1:hover{box-shadow: 0px 0px 12px rgba(117, 115, 115, 0.24);}
.no2{
    background-color: #eee;
    height: 320px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
}
.box2{
    display: flex;
    flex-direction: row;
    margin-top: 30px;
}
.box2-2{
    display: flex;
    flex-direction:row;
    // justify-content: center;
    align-items: center;
}


</style>