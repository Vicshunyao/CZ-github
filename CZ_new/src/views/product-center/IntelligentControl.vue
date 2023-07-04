<script scoped>
export default {
 
 data() {
   return {
     activeMenu: 'pain-points' ,// 默认选中的菜单项
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
       <span class="title">空压站云智控</span> 
    </div>
       <div style="width: 400px;margin-top: 10px;">
        <p>空压机云智控是联通智造云打造的空压机智能化控制系统，通过采集企业动力车间的空压机、冷干机、余热回收机运行数据，对采集数据进行运算，按需动态调整设备启停，实现站内设备智能化控制，降低企业用能成本</p>
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
        <el-menu-item index="1" style="margin-right: 50px;">企业痛点</el-menu-item>
        <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
        <el-menu-item index="3" style="margin-right: 50px;">核心优势</el-menu-item>
        
    </el-menu> -->

    <el-affix :offset="0">
    <div class="sticky-menu">
    <el-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect" style="justify-content: center;">
      <el-menu-item index="1" style="margin-right: 50px;">企业痛点</el-menu-item>
      <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
      <el-menu-item index="3">核心优势</el-menu-item>
    </el-menu>
  </div>
</el-affix>

    <div class="no1" id="1">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">企业痛点</span>
        <div class="box1">
            <div class="box1-1" style="width: 300px;height: 300px;margin-right: 50px;">
                <img src="@/assets/product-center/7-1.png"/>
                <h1 style="margin-top: 20px;">耗能高</h1>
                <p style="margin-top: 40px;width: 200px;">是企业能耗消耗主要部分之一，平均耗能占企业10-40%</p>
            </div>
            <div class="box1-1" style="width: 300px;height: 300px;margin-right: 50px;">
                <img src="@/assets/product-center/7-2.png"/>
                <h1 style="margin-top: 20px;">舒适性不协调</h1>
                <p style="margin-top: 40px;width: 200px;">室内舒适性未能实时掌握，空调操作仅凭经验</p>
            </div>
            <div class="box1-1" style="width: 300px;height: 300px;margin-right: 50px;">
                <img src="@/assets/product-center/7-3.png"/>
                <h1 style="margin-top: 20px;">能耗浪费</h1>
                <p style="margin-top: 40px;width: 200px;">为了迁就过热区域，造成其他区域大范围过冷</p>
            </div>
            <div class="box1-1" style="width: 300px;height: 300px;">
                <img src="@/assets/product-center/7-4.png"/>
                <h1 style="margin-top: 20px;">缺乏调节手段</h1>
                <p style="margin-top: 40px;width: 200px;">空调能耗高居不下，要牺牲舒适度来降能耗</p>
            </div>
        </div>

    </div>
    <div class="no2" id="2">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">产品功能</span>
        <div class="box2">
            <div class="box2-2" style="width: 450px;margin-right: 20px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-1.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">全类型设备监控</h1>
                <p style="font-size: 14px;color: #777;">空压机、后处理、附属设备、仪器仪表、阀门、冷干机、吸干机、水泵、风机、余热回收机、流量计、电表等设备。</p>
            </div>
            </div>
            <div class="box2-2" style="width: 450px;margin-right: 20px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-2.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">智能化控制</h1>
                <p style="font-size: 14px;color: #777;">根据企业的实际生产需要的用气情况，淡旺季、昼夜或白天因素，智能控制整个站房的启停，以最大化节能；或预设计划，减少人工操作失误。</p>
            </div>
            </div>
            <div  class="box2-2" style="width: 450px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-3.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">整站节能</h1>
                <p style="font-size: 14px;color: #777;">由于压力带越广能耗越高；智控系统通过窄带恒压技术，减少设备压差，恒定压力，减少车间无效能耗。</p>
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
                <h1 style="margin-bottom: 10px;color: #fff;">快部署、易运维</h1>
                <p style="font-size: 14px; color: #fff;">标准化组件，非侵入式安装，上线周期短（1周），远程云边端同步升级。</p>
            </div>
            </div>
            <div class="box3-3" style="width: 550px">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-2.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">精细化、专业化</h1>
                <p style="font-size: 14px;color: #fff;">通过窄带恒压、边缘计算、AI算法自主调参等技术，实现设备动态决策。</p>
            </div>
            </div>
        </div>
        <div class="box3">
            <div class="box3-3" style="width: 550px;margin-right: 100px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-3.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px; color: #fff;">高效节能</h1>
                <p style="font-size: 14px;color: #fff;">边缘服务器的智能化控制，AI智能大脑，按需动态调整设备启停。</p>
            </div>
            </div>
            <div class="box3-3" style="width: 550px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-4.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">适用广</h1>
                <p style="font-size: 14px;color: #fff;">市场上90%品牌的空压机设备都可以直接对接采集数据。</p>
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
.no3{
    background-image: url('@/assets/product-center/5-bg.png');
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
}
.box3{
    display: flex;
    flex-direction: row;
    margin-top: 30px;
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