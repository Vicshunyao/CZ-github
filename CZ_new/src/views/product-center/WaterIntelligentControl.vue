<script scoped>
export default {
 
 data() {
   return {
     activeMenu: 'pain-points', // 默认选中的菜单项
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
    <div style="margin-left: 200px;">
        <div>
       <span class="title">制冷站水智控</span> 
    </div>
       <div style="width: 400px;margin-top: 10px;">
        <p>通过采集制冷站运行设备、水质和水处理化学品等数据，建立制冷站水智控模型，实现对企业制冷机组的水循环系统进行智能化控制，解决制冷站中因不良水质导致设备损坏、换热效率低、污堵、排放超标等问题</p>
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
      <el-menu-item index="1" style="margin-right: 50px;">需求场景</el-menu-item>
      <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
      <el-menu-item index="3" style="margin-right: 50px;">核心优势</el-menu-item>
      <el-menu-item index="4">产品效能</el-menu-item>
    </el-menu>
  </div>
</el-affix>

    <div class="no1" id="1">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">需求场景</span>
        <div class="box1">
            <div class="box1-1" style="width: 300px;margin-right: 90px;">
                <img src="@/assets/product-center/3-1.png"/>
                <h1 style="margin-top: 20px;">冷却水系统运行处理成本高</h1>
                <p style="margin-top: 40px;">企业使用独立循环冷却水系统，制冷量1000RT以上，冷却水循环量600m3/h以上，费用成本高。</p>
            </div>
            <div class="box1-1" style="width: 300px;margin-right: 90px;">
                <img src="@/assets/product-center/3-2.png"/>
                <h1 style="margin-top: 20px;">水质管理手段落后</h1>
                <p style="margin-top: 40px;">普遍采取人工或定量控制方式，不能适应系统变化，水处理效果差。冷却塔和制冷机更换频繁，设备使用寿命未达到预期标准。</p>
            </div>
            <div class="box1-1" style="width: 300px;">
                <img src="@/assets/product-center/3-3.png"/>
                <h1 style="margin-top: 20px;">冷却站无法满足生产负荷</h1>
                <p style="margin-top: 40px;">制冷机能耗快速上升，设备制冷量降低，影响生产稳定，冷却站设备维护成本高。</p>
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
        <span style="margin-top: 60px;font-size: 25px;font-weight: 800;color: #fff;margin-bottom: 20px;">核心优势</span>
        <span style="color: #fff;">完善、成熟的多行业解决方案，帮助客户轻松快速进行只能决策</span>
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
    <div class="no4" id="4">
        <span style="font-size: 30px;margin-top: 40px;">产品效能</span>
     <div class="box4">
        <div class="box4-4" style="margin-right: 150px;">
            <span style="font-size: 60px;">8-18个月</span>
            <span style="color: #777;">投资回报</span>
        </div>
        <div  class="box4-4" style="margin-right: 150px;">
            <span style="font-size: 60px;">9%-15%</span>
            <span style="color: #777;">平均节省用电</span>
        </div>
        <div class="box4-4" style="margin-right: 150px;">
            <div style="display: flex;flex-direction:row;justify-content: center;align-items:baseline;">
            <span style="font-size: 60px;">&lt;3%</span>
            <span style="font-weight: 600;font-size: 20px;">年</span>
        </div>
            <span style="color: #777;">COD下降</span>
        </div>
        <div class="box4-4" >
            <div style="display: flex;flex-direction:row;justify-content: center;align-items:baseline;">
            <span style="font-size: 60px;">&gt;10%</span>
            <span style="font-weight: 600;font-size: 20px;">年</span>
        </div>
            <span style="color: #777;">冷塔填料寿命</span>
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
    height: 460px;
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