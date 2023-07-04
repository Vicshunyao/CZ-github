<script scoped>
export default {
 
 data() {
   return {
     activeMenu: 'pain-points' // 默认选中的菜单项
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

 },

};
</script>

<template>
<el-header class="header1">
    <div style="margin-left: 100px;">
        <div>
       <span class="title">中央空调云智控</span> 
    </div>
       <div style="width: 400px;margin-top: 10px;">
        <p>通过监控中央空调主设备，包含制冷主机、冷冻泵、冷却泵、冷却塔、风系统等，监控其开关机状态、负荷与能耗、温湿度、压力、流量参数；基于计算结果，按需动态调整设备启停，降低企业用能成本。</p>
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
      <el-menu-item index="3">核心优势</el-menu-item>
    </el-menu>
  </div>
</el-affix>

    <div class="no1" id="1">
        <span style="margin-top: 70px;font-size: 25px;font-weight: 800;">企业痛点</span>
        <div class="box1">
            <div class="box1-1" style="width: 300px;height: 300px;margin-right: 50px;">
                <img src="@/assets/product-center/7-1.png"/>
                <h1 style="margin-top: 20px;">空压站频繁启停</h1>
                <p style="margin-top: 40px;width: 200px;">空压站启停频繁，空载率高了造成浪费</p>
            </div>
            <div class="box1-1" style="width: 300px;height: 300px;margin-right: 50px;">
                <img src="@/assets/product-center/7-2.png"/>
                <h1 style="margin-top: 20px;">人工操作效率低</h1>
                <p style="margin-top: 40px;width: 200px;">人工手动启停操作不及时，且人工点检繁琐效率低</p>
            </div>
            <div class="box1-1" style="width: 300px;height: 300px;margin-right: 50px;">
                <img src="@/assets/product-center/7-3.png"/>
                <h1 style="margin-top: 20px;">动力车间影响生产</h1>
                <p style="margin-top: 40px;width: 200px;">供气压力与用气压力不匹配，影响生产车间</p>
            </div>
            <div class="box1-1" style="width: 300px;height: 300px;">
                <img src="@/assets/product-center/7-4.png"/>
                <h1 style="margin-top: 20px;">空压站用电占比高</h1>
                <p style="margin-top: 40px;width: 200px;">空压机以75KW为例，每天工作12小时，一年约30万用电量</p>
            </div>
        </div>


    </div>
    <div class="no2" id="2">
        <span style="margin-top: 60px;margin-bottom: 20px; font-size: 25px;font-weight: 800;">产品功能</span>
        <div class="box2">
            <div class="box2-2" style="width: 600px;margin-right: 30px;">
                <div style="margin-left: 30px ;">
                    <div style="width: 550px; display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
                <h1 style="margin-bottom: 10px;">设备健康</h1>
                <span style="font-size: 60px;color: #ddd;">01</span>
            </div>
                <p style="font-size: 14px;width: 550px;">实时监测设备运行状态，分析运行数据提前发现设备隐患，实现设备故障即时告知。</p>
            </div>
            </div>
            <div class="box2-2" style="width: 600px;">
                <div style="margin-left: 30px ;">
                    <div style="width: 550px;display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
                <h1 style="margin-bottom: 10px;">节能运行</h1>
                <span style="font-size: 60px;color: #ddd;">02</span>
            </div>
                <p style="font-size: 14px;width: 550px;">系统数据云端集中，通过信息物联取代人眼、智慧策略取代人脑方式，实现全系统AI调控。</p>
            </div>
            </div>
            
            
        </div>
        <div class="box2">
            <div class="box2-2" style="width: 600px;margin-right: 30px;">
                <div style="margin-left: 30px ;">
                    <div style="width: 550px;display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
                <h1 style="margin-bottom: 10px;">高效监管</h1>
                <span style="font-size: 60px;color: #ddd;">03</span>
                 </div>
                <p style="font-size: 14px;width: 550px;">在系统集中操控，提高效率，通过数据分析，宏观把控管理。</p>
            </div>
            </div>
            <div class="box2-2" style="width: 600px;">
                <div style="margin-left: 30px ;">
                    <div style="width: 550px;display: flex;flex-direction: row; align-items: center;justify-content: space-between;">
                <h1 style="margin-bottom: 10px;">降本增效</h1>
                <span style="font-size: 60px;color: #ddd;">04</span>
            </div>
                <p style="font-size: 14px;width: 550px;">温湿度自动寻优匹配控制，节省能耗，云边一体参数优化，提升空调机房能效及品质，实现节能率8%-30%，企业投资回报周期8-24个月</p>
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
                <h1 style="margin-bottom: 10px;color: #fff;">省钱</h1>
                <p style="font-size: 14px; color: #fff;">空调机房节能优化10%-30%。</p>
            </div>
            </div>
            <div class="box3-3" style="width: 550px">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-2.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">省力</h1>
                <p style="font-size: 14px;color: #fff;">自动机房巡检抄表，节省运行管理人工60%。</p>
            </div>
            </div>
           
            
        </div>
        <div class="box3">
            <div class="box3-3" style="width: 550px;margin-right: 100px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-3.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px; color: #fff;">省事</h1>
                <p style="font-size: 14px;color: #fff;">异常预告警秒级推送，7*24h保障运营安全。</p>
            </div>
            </div>
            <div class="box3-3" style="width: 550px;">
                <img style="width: 70px;height: 70px;" src="@/assets/product-center/5-4.png"/>
                <div style="margin-left: 20px ;">
                <h1 style="margin-bottom: 10px;color: #fff;">省心</h1>
                <p style="font-size: 14px;color: #fff;">设备生命周期管理，资产保值率提升20%。</p>
            </div>
            </div>
            
            
        </div>

    </div>
    <div class="area" >
        <el-tooltip content="提示内容">
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