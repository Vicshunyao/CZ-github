<script setup >
import {ArrowRight} from '@element-plus/icons-vue'
</script>

<template>
     <el-header class="header1">
       <span class="title">产品中心</span> 
    </el-header>
<el-main class="mainbox">
    <el-row  justify="space-evenly" class="row1">
        <router-link to="/energecontrol" style="text-decoration: none;">
      <el-card shadow="hover">
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon2.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >能源管理</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">针对企业的综合用能（例如电、水、燃气、蒸汽）进行全面数字化监测，适用于全行业企业，并且满足工业企业用能管理基本需求。实时远程监测企业用能情况；有效助您降低用能成本。</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <button class="button button3" style="display: flex;justify-content: center;align-items: center;width:160px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></button>
    </div>
    </el-card>
</router-link>
<router-link to="/manufacturing" style="text-decoration: none;">
      <el-card shadow="hover"> 
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon1.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >生产协同</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">制造企业生产执行管理系统，通过APP收集与传递工单信息，对从订单下达开始到产品完成的整个产品生产过程进行优化的管理，对工厂发生的实时事件。</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <button class="button button3" style="display: flex;justify-content: center;align-items: center;width:160px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></button>
    </div>
         </el-card>
        </router-link>
         <router-link to="/equipment" style="text-decoration: none;">
      <el-card shadow="hover">
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon3.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >装备联网</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">以设备联网为重点，生产管理为辅助，帮助企业实时掌握设备运行状态，提高生产效率，降低人工成本，具有数据采集、设备管理、工艺管理、品质管理等功能模块。</p>
    </div>
    <div style="display: flex;justify-content: center;align-items: center; margin-top: 30px;">
        <button class="button button3" style="display: flex;justify-content: center;align-items: center;width:160px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></button>
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
    justify-content: center;
    align-items: center;
    width: 406px;
    height: 420px;
    transition: all .1s;
  }
  .el-card:hover{
    margin-top: -5px;
    border-top: 5px solid #409EFF;
    .button3 {
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

.button3:hover {
 background-color: #409EFF;
 color: white;
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