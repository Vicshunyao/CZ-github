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
       <span class="title">分体空调云智控</span> 
    </div>
       <div style="width: 400px;margin-top: 10px;">
        <p>分体空调智控系统针对公共建筑中的分体空调进行专项计量、运行监测、节能控制、故障诊断、资产管理、维保监督，实现“看得到、计得准、控得住、管得好”，为客户提供空调集群的全生命周期运营保障服务。</p>
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
        <el-menu-item index="4" style="margin-right: 50px;">产品效能</el-menu-item>
    </el-menu> -->

    <el-affix :offset="0">
    <div class="sticky-menu">
    <el-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect" style="justify-content: center;">
      <el-menu-item index="1" style="margin-right: 50px;">企业痛点</el-menu-item>
      <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
      <el-menu-item index="3">产品优势</el-menu-item>
    </el-menu>
  </div>
</el-affix>

    <div class="no1" id="1">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">企业痛点</span>
        <div class="box1">
            <div class="box1-1" style="width: 300px;margin-right: 90px;">
                <img src="@/assets/product-center/3-1.png"/>
                <h1 style="margin-top: 20px;">安全隐患</h1>
                <p style="margin-top: 40px;">公建场景大量的老化空调，容易造成线路过热，电流过大，造成设备老化导致的安全和火灾隐患。</p>
            </div>
            <div class="box1-1" style="width: 300px;margin-right: 90px;">
                <img src="@/assets/product-center/3-2.png"/>
                <h1 style="margin-top: 20px;">缺乏管控造成能耗浪费</h1>
                <p style="margin-top: 40px;">依靠人工管理，不合理使用空调，例如开门开窗使用空调、冷气外漏等造成能源的浪费。</p>
            </div>
            <div class="box1-1" style="width: 300px;">
                <img src="@/assets/product-center/3-3.png"/>
                <h1 style="margin-top: 20px;">故障不能及时发现</h1>
                <p style="margin-top: 40px;">由于安装和维护不当，空调故障普遍存在，空调普遍带故障运行，加速老化，且故障容易引起安全问题。</p>
            </div>
        </div>

    </div>
    <div class="no2" id="2">
        <span style="margin-top: 60px;margin-bottom: 20px; font-size: 25px;font-weight: 800;">产品功能</span>
        <div class="box2">
            <div class="box2-2" style="width: 600px;margin-right: 30px;">
                <div style="margin-left: 30px ;">
                    <div style="width: 550px; display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
                <h1 style="margin-bottom: 10px;">冷冻水水质控制</h1>
                <span style="font-size: 60px;color: #ddd;">01</span>
            </div>
                <p style="font-size: 14px;width: 550px;">在线水质分析站实时监控与分析水质，通过水质与设备回传数据自动优化流程，智能控制设备及药剂添加。</p>
            </div>
            </div>
            <div class="box2-2" style="width: 600px;">
                <div style="margin-left: 30px ;">
                    <div style="width: 550px;display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
                <h1 style="margin-bottom: 10px;">成本运行核算</h1>
                <span style="font-size: 60px;color: #ddd;">02</span>
            </div>
                <p style="font-size: 14px;width: 550px;">水系统运行成本包括了水、能源、化学品、人员和维护等费用，及时了解系统运行成本和趋势能够帮助管理者有效平衡和控制费用。</p>
            </div>
            </div>
            
            
        </div>
        <div class="box2">
            <div class="box2-2" style="width: 600px;margin-right: 30px;">
                <div style="margin-left: 30px ;">
                    <div style="width: 550px;display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
                <h1 style="margin-bottom: 10px;">系统诊断分析</h1>
                <span style="font-size: 60px;color: #ddd;">03</span>
                 </div>
                <p style="font-size: 14px;width: 550px;">设备在线监控并分析，针对冷却水水质诊断/分析/评分计算，提供水质趋势预测。</p>
            </div>
            </div>
            <div class="box2-2" style="width: 600px;">
                <div style="margin-left: 30px ;">
                    <div style="width: 550px;display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
                <h1 style="margin-bottom: 10px;">降本增效</h1>
                <span style="font-size: 60px;color: #ddd;">04</span>
            </div>
                <p style="font-size: 14px;width: 550px;">通过云端建立设备数学模型进行诊断和机器学习，智能控制设备启停，实现节能率9%-15%，企业投资回报周期12-24个月。</p>
            </div>
            </div>
            
            
        </div>

    </div>

    <div class="no3" id="3">
        <span style="margin-top: 50px;font-size: 25px;font-weight: 800;color: #fff;margin-bottom: 20px;">核心优势</span>
        
        <div class="box3">
            <div class="box3-3" style="width: 550px;margin-right: 100px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-1.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">延长设备寿命</h1>
                <p style="font-size: 14px; color: #fff;">避免水质发生腐蚀和微生物沉积，减少清洗维护频率，防止因腐蚀/维护损耗缩短设备使用寿命</p>
            </div>
            </div>
            <div class="box3-3" style="width: 550px">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-2.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">提高冷塔效率</h1>
                <p style="font-size: 14px;color: #fff;">动态调节冷却塔供水阀门，保证冷却水布水均匀，避免布水不均导致出水温度升高</p>
            </div>
            </div>
           
            
        </div>
        <div class="box3">
            <div class="box3-3" style="width: 550px;margin-right: 100px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-3.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px; color: #fff;">快速且独立部署</h1>
                <p style="font-size: 14px;color: #fff;">1-7天快速部署不影响生产进度不需要进行长时间停产更换，且同时兼容工厂原有设备，改造方式更加灵活，成本更低</p>
            </div>
            </div>
            <div class="box3-3" style="width: 550px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-4.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">水处理全流程管理</h1>
                <p style="font-size: 14px;color: #fff;">包含冷却水循环冷却水系统、双膜除盐水系统、废水系统、锅炉、污水、中水等系统</p>
            </div>
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
    flex-direction: row;
    margin-top: 70px;
}
.box1-1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.no2{
    background-color: #ffffff;
    height: 550px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
}
.box2{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
}
.box2-2{
    display: flex;
    flex-direction:row;
    align-items: center;
    background-color: #fff;
    height: 180px;
    border-left:5px solid #337ecc;
    box-shadow:0px 0px 12px #eee;
}
.box2-2:hover{
    background-color: #337ecc;
    color: #fff;
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