<script scoped>
export default {
 
 data() {
   return {
     activeMenu: 'pain-points' ,// 默认选中的菜单项
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
       <span class="title">设备售后管理系统</span> 
    </div>
       <div style="width: 400px;margin-top: 10px;">
        <p>
            
            面向装备制造业，助力客户从卖产品到卖服务，提供设备4S一站式服务，帮助客户积累售后经验知识，服务人均工时透明化、建立有效KPI，提升售服人员工作效率、建立企业统一的知识库，信息高效协同，擦亮客户服务招牌，带来新机的销售机会。
      
      </p>
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
      <el-menu-item index="pain-points" style="margin-right: 50px;">企业痛点</el-menu-item>
      <el-menu-item index="product-features" style="margin-right: 50px;">产品功能</el-menu-item>
      <el-menu-item index="core-advantages" style="margin-right: 50px;">核心优势</el-menu-item>
      <el-menu-item index="product-efficiency">产品效能</el-menu-item>
    </el-menu>
  </div>
</el-affix>

    <div class="no1" id="pain-points">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">企业痛点</span>
        <div class="box1">
           <div class="box1-1" style="width: 400px;">
           <div class="box1-1-1" style="width: 400px; display: flex;flex-direction:row;justify-content: space-between;">
            <div class="box-text" style="display: flex;flex-direction:column;">
                <h3>设备管理难</h3>
                <span> 设备信息管理难</span>
            </div>
            <div class="box-img" >
                <img src="@/assets/product-center/8-1.png"/>
            </div>
           </div>
           <div class="box1-1-2" style="width: 400px; margin-top: 250px;display: flex;flex-direction:row;justify-content:space-between;">
            <div class="box-text" style="display: flex;flex-direction:column;">
                <h3>研发管理难</h3>
                <span>设计研发管理难</span>
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
                <h3>售后管理难</h3>
                <span>售后服务管理难</span>
            </div>
           </div>
           <div class="box1-1-1" style="width: 400px; margin-top: 250px;display: flex;flex-direction:row;">
            <div class="box-img" style="margin-right: 30px;">
                <img src="@/assets/product-center/8-4.png"/>
            </div>
            <div class="box-text" style="display: flex;flex-direction:column;">
                <h3>设备销售难</h3>
                <span>设备销售难</span>
            </div>
           
           </div>
           </div>
        </div>

    </div>
    <div class="no2" id="product-features">
        <span style="margin-top: 65px;margin-bottom: 10px; font-size: 25px;font-weight: 800;">产品功能</span>
        <div class="box2">
            <div class="box2-2">
                <img src="@/assets/product-center/4-1.png"/>
                   <div style="display: flex;flex-direction:column ;margin-left: 20px;">
                    <h3>远程维护</h3>
                    <span>设备远程诊断维护，远程定位、远程监测和远程锁机等</span>
                   </div>
            </div>
            <div class="box2-2">
                <img src="@/assets/product-center/4-2.png"/>
                   <div style="display: flex;flex-direction:column ;margin-left: 20px;">
                    <h3>设备运行监测</h3>
                    <span>设备状态、工艺、生产及品质等数据实时监测</span>
                   </div>
            </div>
            <div class="box2-2">
                <img src="@/assets/product-center/4-3.png"/>
                   <div style="display: flex;flex-direction:column ;margin-left: 20px;">
                    <h3>配件商城</h3>
                    <span>客户可在线浏览商品，上下架商品、增加设备类型、备品备件、设备耗材和服务销售等。</span>
                   </div>
            </div>
            
            
        </div>
        

    </div>
    <div class="no3" id="core-advantages">
        <span style="margin-top: 65px;font-size: 25px;font-weight: 800;color: #fff;margin-bottom: 20px;">核心优势</span>
        <!-- <span style="color: #fff;">完善、成熟的多行业解决方案，帮助客户轻松快速进行只能决策</span> -->
        <div class="box3">
            <div class="box3-3" >
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-1.png"/>
                <div style="margin-left: 20px ;">
                <!-- <h1 style="margin-bottom: 10px;color: #fff;">覆盖面广</h1> -->
                <p style="font-size: 14px; color: #fff;">产品行业成熟度高，专注为装备行业提供设备IOT+售后服务解决方案</p>
            </div>
            </div>
            <div class="box3-3" >
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-2.png"/>
                <div style="margin-left: 20px ;">
                <!-- <h1 style="margin-bottom: 10px;color: #fff;">技术突出</h1> -->
                <p style="font-size: 14px;color: #fff;">轻量化应用，低成本，快部署，无需专人维护</p>
            </div>
            </div>
           
            
        </div>
        <div class="box3">
            <div class="box3-3" >
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-3.png"/>
                <div style="margin-left: 20px ;">
                <!-- <h1 style="margin-bottom: 10px; color: #fff;">性价比高</h1> -->
                <p style="font-size: 14px;color: #fff;">资源灵活配置，按需付费，减少一次性投入成本</p>
            </div>
            </div>
            <div class="box3-3" >
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-4.png"/>
                <div style="margin-left: 20px ;">
                <!-- <h1 style="margin-bottom: 10px;color: #fff;">接口丰富</h1> -->
                <p style="font-size: 14px;color: #fff;">提供端边云的整体解决方案，赋能OEM及其终端客户价值提升</p>
            </div>
            </div>
            
            
        </div>

    </div>
    
    <div class="no4" id="product-efficiency">
        <span style="font-size: 25px;margin-top: 40px;font-weight: 800;">产品效能</span>
     <div class="box4">
        <div class="box4-4" style="margin-right: 150px;">
            <span style="font-size: 60px;">15%</span>
            <span style="color: #777;">售后服务全流程在线化、数字化效率提升</span>
        </div>
        <div  class="box4-4" style="margin-right: 150px;">
            <span style="font-size: 60px;">20%</span>
            <span style="color: #777;">售后服务成本降低</span>
        </div>
        <div class="box4-4" style="margin-right: 150px;">
            <span style="font-size: 60px;">20%</span>
            <span style="color: #777;">服务单+工单管理，协同工作效率提升</span>
        </div>
        <div  class="box4-4" >
            <span style="font-size: 60px;">80%</span>
            <span style="color: #777;">高效响应、主动服务，客户满意度提升</span>
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
    height: 550px;
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
    margin-right: 20px;
    
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
    // justify-content: space-between;
    align-items: center;
    width: 550px;
    margin-right: 100px;  
}
.box3-3-last{
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    width: 550px;
     
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