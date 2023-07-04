<script setup>
import {ArrowRight} from '@element-plus/icons-vue'
</script>

<template>
<el-header class="header1">
       <span class="title">装备联网</span> 
    </el-header> 
<el-main class="mainbox">
    <el-row  justify="space-evenly" class="row1">
      <router-link to="/productmanage" style="text-decoration: none;">
      <el-card shadow="hover">
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon3.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >物联及生产管理</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">面向注塑、机加工、五金加工、模具、冲压、电子信息等离散制造业提供生产管理系统解决方案，以设备联网为基础，实时监控设备运行状态和数据，同时提供专业的生产管理系统，智能排单系统帮助企业实时掌握设备运行状态，实现生产过程管理，提高生产效率，降低人工成本。</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <el-button text class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
    </el-card>
  </router-link>
  <router-link to="/predictive-maintenance" style="text-decoration: none;">
      <el-card shadow="hover"> 
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon3.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >预测性维护</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">面向石化、水泥、钢铁、汽车、矿业、食品饮料等行业的转动设备以及机加工行业数控机床基于智能感知、信号处理、通信技术、故障诊断、数据挖掘等技术，实现设备健康管理和基于数据驱动的预测性维护，帮助企业对关键设备进行监控，对关键设备故障进行预警通知，避免关键设备故障给企业生产和安全带来较大损失。</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <el-button text class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
         </el-card>
        </router-link>
        <router-link to="/managerial-system" style="text-decoration: none;">
      <el-card shadow="hover">
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon3.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >设备售后管理系统</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">面向装备制造业，助力客户从卖产品到卖服务，提供设备4S一站式服务，帮助客户积累售后经验知识，服务人均工时透明化、建立有效KPI，提升售服人员工作效率、建立企业统一的知识库，信息高效协同，擦亮客户服务招牌，带来新机的销售机会。</p>
    </div>
    <div style="display: flex;justify-content: center;align-items: center; margin-top: 30px;">
        <el-button text class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
         </el-card>
        </router-link>
  </el-row>
  
</el-main>
</template>

<style lang='scss' scoped>
.mainbox{
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
}
.row1{
    margin-top: 60px;
}
.el-card {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 406px;
    height: 420px;
    
    transition: all .1s;
  }
  .el-card:hover{
    margin-top: -5px;
    border-top: 5px solid #409EFF;
    .button3{
    background-color: #409EFF;
    color: white;
   }
  }
  .button {

 border: none;
 color: white;
 padding: 12px 40px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 transition-duration: 0.4s;
 cursor: pointer;

}
.button3 {
 background-color: white; 
 color: black; 
 border: 1px solid #c1c1c1;
}


.header1{
    padding-left: 0;
    padding-right: 0%;
    padding-top: 0;
    width: auto;
    height: 400px;
    background-image: url('@/assets/product-center/4ffdaccf-4753-430a-8853-17c5e23c3e78.png');
    background-size: 100% 400px;
    display: flex;
    justify-content: center;
    align-items:center;
}
@media screen and (max-width: 768px) {
  .header1{
    width: auto;
    height: 200px;
    background-image: url('@/assets/product-center/4ffdaccf-4753-430a-8853-17c5e23c3e78.png');
    background-size: 100% 200px;
    display: flex;
    justify-content: center;
    align-items:center;
  }
}
.title {
    display: flex;
    font-size: 40px;
    font-weight: 900;
    color: #fff;

}
</style>