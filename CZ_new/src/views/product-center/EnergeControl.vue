<script setup>
import {ArrowRight} from '@element-plus/icons-vue'
</script>

<template>
<el-header class="header1">
       <span class="title">能源管理</span> 
    </el-header>
<el-main class="mainbox">
    <el-row  justify="space-evenly" class="row1">
      <router-link to="/energemonitor" style="text-decoration: none;">
      <el-card shadow="hover">
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon2.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >综合能源监测</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">针对企业的综合用能（例如电、水、燃气、蒸汽）进行全面数字化监测，适用于全行业企业，并且满足工业企业用能管理基本需求。实时远程监测企业用能情况；有效助您降低用能成本。</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <el-button class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
    </el-card>
  </router-link>
  <router-link to="/intelligentcontrol" style="text-decoration: none;">
      <el-card shadow="hover"> 
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon2.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >空压站云智控</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">空压机云智控是联通智造云打造的空压机智能化控制系统，通过采集企业动力车间的空压机、冷干机、余热回收机运行数据，对采集数据进行运算，按需动态调整设备启停，实现站内设备智能化控制，降低企业用能成本</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <el-button text class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
         </el-card>
        </router-link>
        <router-link to="/water-intelligent-control" style="text-decoration: none;">
      <el-card shadow="hover">
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon2.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >制冷站水智控</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">通过采集制冷站运行设备、水质和水处理化学品等数据，建立制冷站水智控模型，实现对企业制冷机组的水循环系统进行智能化控制，解决制冷站中因不良水质导致设备损坏、换热效率低、污堵、排放超标等问题</p>
    </div>
    <div style="display: flex;justify-content: center;align-items: center; margin-top: 30px;">
        <el-button text  class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
         </el-card>
        </router-link>
  </el-row>
  <el-row  justify="space-evenly" class="row1">
    <router-link to="/central-air-conditioning" style="text-decoration: none;">
      <el-card shadow="hover">
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon2.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >中央空调云智控</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">通过监控中央空调主设备，包含制冷主机、冷冻泵、冷却泵、冷却塔、风系统等，监控其开关机状态、负荷与能耗、温湿度、压力、流量参数；基于计算结果，按需动态调整设备启停，降低企业用能成本。</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <el-button text class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
    </el-card>
  </router-link>
  <router-link to="/slipt-air-conditioner" style="text-decoration: none;">
      <el-card shadow="hover"> 
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon2.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >分体空调云智控</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">分体空调智控系统针对公共建筑中的分体空调进行专项计量、运行监测、节能控制、故障诊断、资产管理、维保监督，实现“看得到、计得准、控得住、管得好”，为客户提供空调集群的全生命周期运营保障服务。</p>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 30px;">
        <el-button class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;">详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
    </div>
         </el-card>
        </router-link>
        <router-link to="/wisdomreassurance" style="text-decoration: none;">
      <el-card shadow="hover">
        <div  style="display:flex;justify-content: center;">
      <img style="width: 80px;height: 80px;" src="@/assets/product-center/icon2.png"/>
    </div>
    <div style="display: flex;justify-content: center;margin-top: 20px;">
      <h2 >智慧安心宝</h2>
    </div>
    <div style="display: flex;justify-content: center; margin-top: 20px;">
        <p style="height: 150px;width: 350px;">利用物联网、风控AI、云计算等技术，对企业用电、消防、高危风险点等设施环境进行7*24H安全风险监测， 秒级自动告警，预防电气火灾，守护消防安全</p>
    </div>
    <div style="display: flex;justify-content: center;align-items: center; margin-top: 30px;">
        <el-button text class="button button3" style="display: flex;justify-content: center;align-items: center;width:130px;" >详情<el-icon><ArrowRight></ArrowRight></el-icon></el-button>
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