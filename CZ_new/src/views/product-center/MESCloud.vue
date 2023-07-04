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
    <div style="margin-left: 100px;">
        <div>
       <span class="title">云MES</span> 
    </div>
       <div style="width: 400px;margin-top: 10px;">
        <p>云MES是联通智造云推出的制造企业生产执行管理系统，对整个产品生产过程进行优化的管理</p>
      </div>
      <el-button type="primary" style="margin-top: 30px;">相关文档</el-button>
    </div>
    </el-header>
<el-main class="mainbox">
    <el-affix :offset="0">
    <div class="sticky-menu">
    <el-menu mode="horizontal" :default-active="activeMenu" @select="handleMenuSelect" style="justify-content: center;">
      <el-menu-item index="pain-points" style="margin-right: 50px;">产品功能</el-menu-item>
      <el-menu-item index="product-features" style="margin-right: 50px;">痛点解决</el-menu-item>
      <el-menu-item index="core-advantages" style="margin-right: 50px;">核心优势</el-menu-item>
     
    </el-menu>
  </div>
</el-affix>
    <!-- <el-menu 
    class="el-menu-demo"
    mode="horizontal"
    style="justify-content: center;"
    >
        <el-menu-item index="1" style="margin-right: 50px;">企业痛点</el-menu-item>
        <el-menu-item index="2" style="margin-right: 50px;">产品功能</el-menu-item>
        <el-menu-item index="3" style="margin-right: 50px;">核心优势</el-menu-item>
        
    </el-menu> -->
    <!-- <div class="no1">
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

    </div> -->
    <div class="no2" id="pain-points">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">产品功能</span>
        <div class="box2">
            <div class="box2-2" style="width: 450px;margin-right: 20px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-1.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">原料入厂管理</h1>
                <p style="font-size: 14px;color: #777;">APP扫码进行出入库，库存记录实时准确；原料质检结果APP录入，数据与PC端实时同步。
</p>
            </div>
            </div>
            <div class="box2-2" style="width: 450px;margin-right: 20px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-2.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">计划排程辅助</h1>
                <p style="font-size: 14px;color: #777;">APP派单接单和报工；扫码投产，自动判断物料合规，防呆防错；实时反馈进度，排程更准确。</p>
            </div>
            </div>
            <div  class="box2-2" style="width: 450px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-3.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">生产执行管理</h1>
                <p style="font-size: 14px;color: #777;">APP派单接单和报工；扫码投产，自动判断物料合规，防呆防错；实时反馈进度，排程更准确。</p>
            </div>
            </div>
            
        </div>
        <div class="box2">
            <div class="box2-2" style="width: 450px;margin-right: 20px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-4.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">原料仓储管理</h1>
                <p style="font-size: 14px;color: #777;">APP扫码查看库位中物料情况、库存情况，快速便捷； 库龄随时查询，及时处理呆滞物料。</p>
            </div>
            </div>
            <div class="box2-2" style="width: 450px;margin-right: 20px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-5.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">成品追溯</h1>
                <p style="font-size: 14px;color: #777;">成品条码与厂内二维码绑定，扫码追溯成品履历，便于成品的售后处理更快速简便。</p>
            </div>
            </div>
            <div  class="box2-2" style="width: 450px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/4-6.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;">设备维护</h1>
                <p style="font-size: 14px;color: #777;">设备、模具等数据一键导入，统一管理及查阅；维保任务APP定时提醒，确保不漏检。</p>
            </div>
            </div>
            
        </div>

    </div>
    <div class="no1" id="product-features">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">企业痛点</span>
        <div class="box1">
            <div class="box1-1" style="width: 300px;margin-right: 90px;">
                <img src="@/assets/product-center/3-1.png"/>
                <h1 style="margin-top: 20px;">部门间信息孤岛</h1>
                <p style="margin-top: 40px;">产线数据依靠人工统计汇报和纸质单据传递，信息传递不及时，部门间协同效率低。</p>
            </div>
            <div class="box1-1" style="width: 300px;margin-right: 90px;">
                <img src="@/assets/product-center/3-1.png"/>
                <h1 style="margin-top: 20px;">订单交期不准确</h1>
                <p style="margin-top: 40px;">计划员人工排产无法实时了解车间和库存情况，准确性低，计划执行差，致使订单交付延期。
</p>
            </div>
            <div class="box1-1" style="width: 300px;">
                <img src="@/assets/product-center/3-1.png"/>
                <h1 style="margin-top: 20px;">生产进度不直观</h1>
                <p style="margin-top: 40px;">生产数据通过纸质单据统计汇报，生产各流程进度无法实时获取，缺乏实时直观的进度看板。</p>
            </div>
        </div>
        <div class="box1">
            <div class="box1-1" style="width: 300px;margin-right: 90px;">
                <img src="@/assets/product-center/3-1.png"/>
                <h1 style="margin-top: 20px;">库存积压严重</h1>
                <p style="margin-top: 40px;">仓库管理混乱，库存信息不准确，高库存与缺料并存，库存积压占用大量成本。</p>
            </div>
            <div class="box1-1" style="width: 300px;margin-right: 90px;">
                <img src="@/assets/product-center/3-1.png"/>
                <h1 style="margin-top: 20px;">质量无法追溯</h1>
                <p style="margin-top: 40px;">成品、在制品状况无法实时统计，质量问题无法及时追溯和预警。</p>
            </div>
            <div class="box1-1" style="width: 300px;">
                <img src="@/assets/product-center/3-1.png"/>
                <h1 style="margin-top: 20px;">产能利用率低</h1>
                <p style="margin-top: 40px;">设备故障不能及时处理，整体维修效率低；设备故障频发，影响生产效率。</p>
            </div>
        </div>
    </div>
    <div class="no3" id="core-advantages">
        <span style="margin-top: 50px;font-size: 25px;font-weight: 800;color: #fff;margin-bottom: 20px;">核心优势</span>
        <div class="box3">
            <div class="box3-3" style="width: 550px;margin-right: 100px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-1.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">操作简易</h1>
                <p style="font-size: 14px; color: #fff;">互联网消费级软件界面设计，像使用微信一样简单；培训成本低，上手仅需1-2天，根据教程即可自行完成配置。</p>
            </div>
            </div>
            <div class="box3-3" style="width: 550px">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-2.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">快速上线</h1>
                <p style="font-size: 14px;color: #fff;">SaaS产品云端部署，实施周期远低于传统软件；无需购买硬件和改造产线，只需APP及浏览器登陆即可使用。</p>
            </div>
            </div>
        </div>
        <div class="box3">
            <div class="box3-3" style="width: 550px;margin-right: 100px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-3.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px; color: #fff;">小投入，低风险</h1>
                <p style="font-size: 14px;color: #fff;">按功能及账户数按年付费，仅需传统软件1/4的费用，免费升级及维护，稳定持续更新，系统与您的业务一同进步。</p>
            </div>
            </div>
            <div class="box3-3" style="width: 550px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-4.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">业界最新技术</h1>
                <p style="font-size: 14px;color: #fff;">采用K8S、Docker、TensorFlow等最新技术栈，开放文档完善，方便查阅，接口稳定，开发时间短，数据对接稳定。</p>
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
// .no1{
//     display: flex;
//     // justify-content: center;
//     flex-direction:column;
//     align-items: center;
//     height: 500px;
// }
// .box1{
//     display: flex;
//     flex-direction: row;
//     margin-top: 30px;
// }
// .box1-1{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
    
// }
// .box1-1:hover{box-shadow: 0px 0px 12px rgba(117, 115, 115, 0.24);}
.no1{
    display: flex;
    // justify-content: center;
    flex-direction:column;
    align-items: center;
    height: 700px;
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
    background-color: #eee;
    height: 400px;
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