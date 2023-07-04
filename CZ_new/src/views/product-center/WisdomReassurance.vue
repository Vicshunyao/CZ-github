<script scoped>
export default {
 
 data() {
   return {
    activeMenu: 'pain-points',// 默认选中的菜单项
            tooltipContent: '点击跳转到网站',
            showPhone: false,
            showWebsiteUrl: false,
            phoneNumber: '123-456-7890',
            websiteUrl: 'https://your-website.com'
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
       <span class="title">5G智慧安心宝</span> 
    </div>
       <div style="width: 400px;margin-top: 10px;">
        <p>利用物联网、风控AI、云计算等技术，对企业用电、消防、高危风险点等设施环境进行7*24H安全风险监测， 秒级自动告警，预防电气火灾，守护消防安全</p>
      </div>
      <el-button type="primary" style="margin-top: 30px;">相关文档</el-button>
    </div>
    </el-header>
<el-main class="mainbox">
    <!-- <el-menu 
    class="el-menu-demo"
    mode="horizontal"
    style="justify-content: center;"
    >
        <el-menu-item index="1" style="margin-right: 50px;">需求场景</el-menu-item>
        <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
        <el-menu-item index="3" style="margin-right: 50px;">核心优势</el-menu-item>
        <el-menu-item index="4" >产品效能</el-menu-item>
    </el-menu> -->

    <el-affix :offset="0">
    <div class="sticky-menu">
    <el-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect" style="justify-content: center;">
      <el-menu-item index="1" style="margin-right: 50px;">企业痛点</el-menu-item>
      <el-menu-item index="2" style="margin-right: 50px;">功能服务</el-menu-item>
      <el-menu-item index="3">效用价值</el-menu-item>
    </el-menu>
  </div>
</el-affix>

    <div class="no1" id="1">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">企业痛点</span>
        <div class="box1">
           <div class="box1-1" style="width: 400px;">
           <div class="box1-1-1" style="width: 400px; display: flex;flex-direction:row;justify-content: space-between;">
            <div class="box-text" style="display: flex;flex-direction:column;">
                <h3>国家政策要求</h3>
                <span>国家消防局2017年将“智慧消防”纳入建设内容</span>
            </div>
            <div class="box-img" >
                <img src="@/assets/product-center/8-1.png"/>
            </div>
           </div>
           <div class="box1-1-2" style="width: 400px; margin-top: 250px;display: flex;flex-direction:row;justify-content:space-between;">
            <div class="box-text" style="display: flex;flex-direction:column;">
                <h3>设备管理弱</h3>
                <span>设施失效无人知，关键时刻用不上</span>
            </div>
            <div class="box-img">
                <img src="@/assets/product-center/8-3.png"/>
            </div>
           </div>
        </div>
           <div class="box1-2">
            <div class="container">
<div class="outer-circle"></div>

<!-- 添加红点和线段 -->
<div class="red-dot dot-top-left"></div>
<div class="line line-top-left"></div>

<div class="red-dot dot-top-right"></div>
<div class="line line-top-right"></div>

<div class="red-dot dot-bottom-left"></div>
<div class="line line-bottom-left"></div>

<div class="red-dot dot-bottom-right"></div>
<div class="line line-bottom-right"></div>
<div class="inner-circle">
      <div>
        <img src="@/assets/product-center/8-5.png" />
      </div>
    </div>
  </div>

           </div>
           <div class="box1-3" style="width: 400px;">
            <div class="box1-1-1" style="width: 400px; display: flex;flex-direction:row;">
                <div class="box-img" style="margin-right: 30px;">
                <img src="@/assets/product-center/8-1.png"/>
            </div>
            <div class="box-text" style="display: flex;flex-direction:column;">
                <h3>巡检效率低</h3>
                <span>人工巡检疏漏多，费时费力效率低</span>
            </div>
           </div>
           <div class="box1-1-1" style="width: 400px; margin-top: 250px;display: flex;flex-direction:row;">
            <div class="box-img" style="margin-right: 30px;">
                <img src="@/assets/product-center/8-4.png"/>
            </div>
            <div class="box-text" style="display: flex;flex-direction:column;">
                <h3>风险不可控</h3>
                <span>风险监控不实时，事故处理不及时</span>
            </div>
           
           </div>
           </div>
        </div>

    </div>
    <div class="no2" id="2">
        <span style="margin-top: 50px;margin-bottom: 10px; font-size: 25px;font-weight: 800;">功能服务</span>
        <div class="box2">
            <div class="box2-2">
                <img src="@/assets/product-center/9-1.png"/>
                   <div style="display: flex;flex-direction:column ;">
                    <h3>银盾</h3>
                    <span>消防基础安全监控，消防水；仓储安全监控；用电安全监控</span>
                   </div>
            </div>
            <div class="box2-2">
                <img src="@/assets/product-center/9-2.png"/>
                   <div style="display: flex;flex-direction:column ;">
                    <h3>金盾</h3>
                    <span>365*24h远程监控服务</span>
                   </div>
            </div>
            <div class="box2-2">
                <img src="@/assets/product-center/9-3.png"/>
                   <div style="display: flex;flex-direction:column ;">
                    <h3>铂金盾</h3>
                    <span>5G终端+高危风险点监控</span>
                   </div>
            </div>
            
            
        </div>
        

    </div>

    
    <div class="no4" id="3">
        <span style="font-size: 25px;margin-top: 40px;font-weight: 800;">效用价值</span>
     <div class="box4">
        <div class="box4-4" style="margin-right: 150px;">
            <span style="font-size: 60px;">80%</span>
            <span style="color: #777;">节省巡检工时</span>
        </div>
        <div  class="box4-4" >
            <span style="font-size: 60px;">80%</span>
            <span style="color: #777;">提升故障发现效率</span>
        </div>
        
     </div>
    </div>

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
.no1{
    display: flex;
    // justify-content: center;
    flex-direction:column;
    align-items: center;
    height: 500px;
}
.box1{
    display: flex;
    flex-direction:row;
    margin-top: 20px;
    
    align-items: center;
}
.no2{
    background-color: #f4f4f4;
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
}
.box2{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}
.box2-2{
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
    height: 180px;
    width: 400px;
    
}

// .box3{
//     display: flex;
//     flex-direction:row;
//     align-items: center;
//     background-color: #fff;
//     height: 180px;
//     border-left:5px solid #337ecc;
//     box-shadow:0px 0px 12px #eee;
// }
.no3{
    background-image: url('@/assets/product-center/5-bg.png');
    height: 450px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
}
.box3{
    display: flex;
    flex-direction: row;
    margin-top: 70px;
}
.box3-3{
    display: flex;
    flex-direction:row;
    // justify-content: center;
    align-items: center;
    
}
.no4{
    background-color: #fff;
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
}
.box4{
    display: flex;
    flex-direction: row;
    margin-top: 70px;
    justify-content: center;
    align-items: center;
}
.box4-4{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.circle{
    height: 314px;
    width: 314px;
    border-radius: 157px;
    border-top: 2px solid #bebebe;
    border-left: 2px solid #bebebe;
    border-right: 2px solid #bebebe;
    border-bottom: 2px solid #bebebe;
    display: flex;justify-content: center;
    align-items:center ;
    // margin-left: 100px;
    // margin-right: 100px;
}
.area{
    position: fixed;
    height: 120px;
    right: 30px;
    top: 75%;
    z-index: 6666;
    padding: 20px;
    width: fit-content;
    opacity: 1;
    border-radius: 8px;
    box-shadow: 0 2px 15px 0 rgba(9,41,77,.15);
    cursor:pointer;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
</style>

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



</style>